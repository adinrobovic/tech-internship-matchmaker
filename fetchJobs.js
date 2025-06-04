const axios = require('axios');
const cron = require('node-cron');
const Internship = require('./models/Internship');

//Example: schedule to run every 2 days
cron.schedule('0 0 */2 * *', async () => {
    console.log('Fetching latest internships...');

    try {
        //Example API (this would be a real public job API URL)
        const response = await axios.get('https://api.examplejobs.com/internships?location=us');

        const internshipData = response.data.map(job => ({
            title: job.title,
            company: job.company.name,
            location: job.location,
            applyUrl: job.url,
        }));

        await Internship.deleteMany({});
        await Internship.insertMany(internshipData);

        console.log('Internships updated successfully!');
    } catch (error) {
        console.error('Error fetgching internships:', error);
    }
});