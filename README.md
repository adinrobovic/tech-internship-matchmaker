# tech-internship-matchmaker
Tech Internship Matchmaker
Tech Internship Matchmaker is a full-stack web application designed to help aspiring tech interns find relevant internship opportunities in Atlanta, Georgia. The platform aggregates listings from the Adzuna API, allowing users to browse, apply, and track internships seamlessly.

🚀 Live Demo
Check out the live application: https://tech-internship-matchmaker.vercel.app

🛠️ Features
Internship Listings: Aggregates IT internship opportunities in Atlanta from the Adzuna API.

User Authentication: Secure registration and login functionalities with JWT-based authentication.

Recently Visited: Tracks and displays internships recently viewed by the user.

Resume Upload: Allows users to upload their resumes for easy application processes.

Responsive Design: Ensures optimal viewing experience across devices.

🧰 Tech Stack

Frontend:

React.js

Axios

Bootstrap
arxiv.org
+2
github.com
+2
makeareadme.com
+6
wired.com
+6
gist.github.com
+6


Backend:

Node.js

Express.js

MongoDB with Mongoose

JWT for authentication

Adzuna API integration
docs.github.com
+11
en.wikipedia.org
+11
tilburgsciencehub.com
+11

Deployment:

Frontend: Vercel

Backend: Render
reddit.com
+1

🧑‍💻 Getting Started
Prerequisites
Node.js and npm installed

MongoDB instance (local or hosted)

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/tech-internship-matchmaker.git
cd tech-internship-matchmaker
Set up environment variables:

Create a .env file in the root directory and add the following:

env
Copy
Edit
ADZUNA_APP_ID=your_adzuna_app_id
ADZUNA_APP_KEY=your_adzuna_app_key
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
Install backend dependencies:

bash
Copy
Edit
npm install
Start the backend server:

bash
Copy
Edit
npm start
Set up the frontend:

bash
Copy
Edit
cd client
npm install
npm start
The frontend will run on http://localhost:3000 and the backend on http://localhost:3001.

📁 Project Structure
bash
Copy
Edit
tech-internship-matchmaker/
├── client/                 # React frontend
├── models/                 # Mongoose models
├── routes/                 # Express routes
├── .env                    # Environment variables
├── server.js               # Entry point for the backend
└── README.md               # Project documentation
🛡️ Environment Variables
Ensure the following variables are set in your .env file:

ADZUNA_APP_ID

ADZUNA_APP_KEY

JWT_SECRET

MONGODB_URI
github.com
+18
docs.github.com
+18
gist.github.com
+18

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch: git checkout -b feature/your-feature-name.

Make your changes and commit them: git commit -m 'Add some feature'.

Push to the branch: git push origin feature/your-feature-name.

Open a pull request.
github.com

📄 License
This project is licensed under the MIT License.

📬 Contact
For any inquiries or feedback, please contact adinrobovic@outlook.com
