require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cron = require('node-cron');
const Internship = require('./models/Internship');
const authRoutes = require('./routes/authRoute');

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
  ],
  credentials: true
}));

app.use(express.json());

// Debug logger to see incoming requests

app.use('/api/auth', authRoutes);

// MongoDB Connection
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI)
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Adzuna API Credentials
const ADZUNA_APP_ID = process.env.ADZUNA_APP_ID 
const ADZUNA_APP_KEY = process.env.ADZUNA_APP_KEY 

// Fetch from Adzuna and store in MongoDB
async function fetchInternshipsFromAdzuna() {
  try {
    console.log('🔄 Fetching internships from Adzuna...');
    const response = await axios.get('https://api.adzuna.com/v1/api/jobs/us/search/1', {
      params: {
        app_id: ADZUNA_APP_ID,
        app_key: ADZUNA_APP_KEY,
        what: 'IT internship',
        where: 'Atlanta, Georgia',
        results_per_page: 20,
        sort_by: 'date',
      },
      headers: {
        'Accept': 'application/json'
      }
    });

    const internships = response.data.results.map(job => ({
      title: job.title || 'No title',
      company: job.company?.display_name || 'Unknown Company',
      location: job.location?.display_name || 'Unknown Location',
      applyUrl: job.redirect_url || '#',
    }));

    await Internship.deleteMany({});
    await Internship.insertMany(internships);

    console.log('✅ Internships cached in MongoDB');
  } catch (error) {
    console.error('❌ Error during Adzuna fetch:', error.response?.data || error.message);
  }
}

// Initial fetch
fetchInternshipsFromAdzuna();

// Scheduled fetch every 2 days
cron.schedule('0 0 */2 * *', fetchInternshipsFromAdzuna);

// Routes

// Test route
app.get('/api/data', (req, res) => {
  res.send({ message: "API is working", data: [1, 2, 3] });
});

// Cached internships (from MongoDB)
app.get('/api/internships', async (req, res) => {
  try {
    const { state } = req.query;

    let query = {};
    if (state) {
      query.location = new RegExp(state, 'i'); 
    } 

    const internships = await Internship.find(query);
    res.json(internships);
  } catch (err) {
    console.error('❌ Error fetching cached internships:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// 🔥 Real-time internships (live from Adzuna)
app.get('/api/internships/live', async (req, res) => {
  try {
    const { state } = req.query;
    const locationQuery = state ? `${state}` : 'United States';

    const response = await axios.get('https://api.adzuna.com/v1/api/jobs/us/search/1', {
      params: {
        app_id: ADZUNA_APP_ID,
        app_key: ADZUNA_APP_KEY,
        what: 'IT internship',
        where: locationQuery,
        results_per_page: 20,
        sort_by: 'date',
      },
      headers: {
        'Accept': 'application/json'
      }
    });

    const internships = response.data.results.map(job => ({
      title: job.title || 'No title',
      company: job.company?.display_name || 'Unknown Company',
      location: job.location?.display_name || 'Unknown Location',
      applyUrl: job.redirect_url || '#',
    }));

    res.json(internships);
  } catch (error) {
    console.error('❌ Error fetching real-time internships:', error.response?.data || error.message);
    res.status(500).json({ message: 'Error fetching real-time data' });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
