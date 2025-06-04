const mongoose = require('mongoose');
const Internship = require('./models/Internship'); // assuming your model is in models/Internship.js

const dbURI = 'mongodb+srv://adinrobovic:jgENUxZlryJKHiD8@internmatchcluster.tp7qa.mongodb.net/?retryWrites=true&w=majority&appName=InternMatchCluster';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected. Seeding internships...');

    // Clear existing internships (optional)
    await Internship.deleteMany({});

    // Seed new internships
    const internships = [
      {
        title: 'Frontend Developer Intern',
        company: 'InnovateX',
        location: 'Remote',
        applyUrl: 'https://www.innovatex.com/careers/frontend'
      },
      {
        title: 'Backend Developer Intern',
        company: 'CodeBase',
        location: 'Atlanta, GA',
        applyUrl: 'https://www.codebase.com/careers/backend'
      },
      {
        title: 'Full-Stack Developer Intern',
        company: 'DevLaunch',
        location: 'New York, NY',
        applyUrl: 'https://www.devlaunch.com/jobs/fullstack'
      },
      {
        title: 'Mobile App Developer Intern',
        company: 'AppMasters',
        location: 'San Francisco, CA',
        applyUrl: 'https://www.appmasters.com/internships/mobile'
      }
    ];

    await Internship.insertMany(internships);
    console.log('Internships seeded successfully!');

    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
  });
