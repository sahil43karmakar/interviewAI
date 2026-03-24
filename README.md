# PrepMate AI - AI Technical Interview Simulator 🎯

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://interviewai-3.onrender.com)
[![GitHub Stars](https://img.shields.io/github/stars/sahil43karmakar/interviewAI.svg)](https://github.com/sahil43karmakar/interviewAI/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/sahil43karmakar/interviewAI.svg)](https://github.com/sahil43karmakar/interviewAI/network)
[![GitHub Issues](https://img.shields.io/github/issues/sahil43karmakar/interviewAI.svg)](https://github.com/sahil43karmakar/interviewAI/issues)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **PrepMate** is a full-stack AI-powered mock interview platform that simulates real technical interviews using advanced language models and provides real-time performance analytics.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Live Demo](#-live-demo)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Lessons Learned](#-lessons-learned)
- [Acknowledgments](#-acknowledgments)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

### 🔐 Authentication & User Management
- **Firebase Google OAuth** - Secure authentication with Google accounts
- **JWT Token-based Sessions** - HTTP-only cookie authentication
- **User Profile Management** - Track credits, interview history, and performance
- **Protected Routes** - Middleware-based authorization

### 🎤 Interview Flow
- **AI-Powered Questions** - LLM-generated technical questions based on role selection
- **Real-Time Video Interface** - Professional interview simulation environment
- **Timer-Controlled Sessions** - Structured interview timing
- **Resume Upload** - PDF parsing for personalized question generation
- **Avatar Selection** - Choose your AI interviewer (Male/Female)

### 📊 Analytics & Reporting
- **Performance Reports** - Detailed feedback on technical accuracy
- **Confidence Scoring** - AI-driven communication analysis
- **Interview History** - Track all past sessions with scores
- **Progress Tracking** - Visualize improvement over time

### 💳 Payment System
- **Credit-Based Model** - Pay-per-interview or subscription plans
- **Razorpay Integration** - Secure payment processing
- **Multiple Plans** - Flexible pricing options

### 🎨 User Experience
- **Responsive Design** - Mobile-first, works on all devices
- **Modern UI/UX** - Built with TailwindCSS and Framer Motion
- **Smooth Animations** - Engaging user interactions
- **Dark Mode Support** - Eye-friendly themes

---

## 🛠️ Tech Stack

### Frontend
- **React.js 19** - UI library
- **Redux Toolkit** - State management
- **React Router v7** - Client-side routing
- **Framer Motion** - Animations
- **TailwindCSS 4** - Styling
- **Vite** - Build tool
- **Axios** - HTTP client
- **React Icons** - Icon library

### Backend
- **Node.js 20.x** - Runtime environment
- **Express.js 5** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Token authentication
- **Cookie Parser** - Cookie handling
- **CORS** - Cross-origin resource sharing
- **Multer** - File uploads
- **PDF-parse** - Resume parsing

### Authentication & APIs
- **Firebase Auth** - Google OAuth provider
- **OpenRouter API** - LLM integration (GPT-4, Claude, etc.)
- **Razorpay** - Payment gateway

### Deployment & Tools
- **Render** - Backend hosting
- **Vercel/Netlify** - Frontend hosting (optional)
- **Git/GitHub** - Version control
- **dotenv** - Environment configuration

---

## 🌐 Live Demo

**Experience PrepMate in action:** [https://interviewai-3.onrender.com](https://interviewai-3.onrender.com)

### Demo Credentials
You can test the platform using your Google account. No demo credentials needed!

---

## 📸 Screenshots

### Homepage
![Homepage](client/public/img1.png)
*Clean, modern landing page with clear value proposition*

### Authentication
![Login](client/src/assets/HR.png)
*Secure Google OAuth integration*

### Interview Setup
![Setup](client/src/assets/resume.png)
*Upload resume and select role for personalized questions*

### Interview Interface
![Interview](client/src/assets/tech.png)
*Real-time video interview with AI avatar*

### Performance Report
![Report](client/src/assets/history.png)
*Detailed analytics and feedback*

---

## 🚀 Installation

### Prerequisites
- Node.js (v20.x or higher)
- MongoDB Atlas account or local MongoDB installation
- Firebase project with Google OAuth enabled
- OpenRouter API key
- Razorpay account (for payment features)

### Step 1: Clone the Repository

```bash
git clone https://github.com/sahil43karmakar/interviewAI.git
cd interviewAI
```

### Step 2: Install Server Dependencies

```bash
cd server
npm install
```

### Step 3: Install Client Dependencies

```bash
cd ../client
npm install
```

### Step 4: Configure Environment Variables

Create `.env` files in both `server` and `client` directories (see below).

### Step 5: Run the Application

**Start Backend Server:**
```bash
cd server
npm run dev
# Server runs on http://localhost:6000
```

**Start Frontend Development Server:**
```bash
cd client
npm run dev
# Client runs on http://localhost:5173
```

---

## 🔐 Environment Variables

### Server Configuration (`server/.env`)

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_change_this

# Firebase Configuration
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# OpenRouter API (LLM)
OPENROUTER_API_KEY=your_openrouter_api_key

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret

# Port
PORT=6000

# CORS Origins (comma-separated for multiple origins)
CLIENT_URL=http://localhost:5173
PRODUCTION_URL=https://interviewai-3.onrender.com
```

### Client Configuration (`client/.env`)

```env
# Firebase Configuration
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Backend Server URL
VITE_SERVER_URL=http://localhost:6000
```

---

## 📖 Usage

### For Users

1. **Sign Up/Login**
   - Visit the homepage
   - Click "Continue with Google"
   - Authenticate with your Google account

2. **Start an Interview**
   - Navigate to the Interview section
   - Upload your resume (PDF format)
   - Select your target role (Frontend, Backend, Full-Stack, etc.)
   - Choose an AI avatar
   - Begin your interview session

3. **View Results**
   - Complete the interview
   - Access detailed performance report
   - Review strengths and areas for improvement
   - Track progress in Interview History

4. **Manage Credits**
   - View available credits
   - Purchase additional credits via Razorpay
   - Use credits for interview sessions

### For Developers

#### Run in Development Mode

```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

#### Build for Production

```bash
# Build Client
cd client
npm run build

# The built files will be in client/dist/
```

#### Start Production Server

```bash
cd server
npm start
```

---

## 📡 API Documentation

### Authentication Endpoints

#### POST `/api/auth/google-auth`
Authenticate user with Google OAuth

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "uid": "firebase_user_id"
}
```

**Response:**
```json
{
  "message": "Authentication successful",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "credits": 100
  }
}
```

#### GET `/api/auth/logout`
Logout current user

**Response:**
```json
{
  "message": "Logged out successfully"
}
```

### User Endpoints

#### GET `/api/user/current-user`
Get current authenticated user

**Headers:**
```
Cookie: token=jwt_token_here
```

**Response:**
```json
{
  "_id": "user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "credits": 100,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

### Interview Endpoints

#### POST `/api/interview/create`
Create new interview session

#### GET `/api/interview/history`
Get user's interview history

#### GET `/api/interview/:id`
Get specific interview report

### Payment Endpoints

#### POST `/api/payment/create-order`
Create Razorpay payment order

#### POST `/api/payment/verify`
Verify payment signature

---

## 📁 Project Structure

```
interviewAI/
├── client/                     # Frontend React Application
│   ├── public/
│   │   └── img1.png
│   ├── src/
│   │   ├── assets/            # Images, videos, static files
│   │   ├── components/        # Reusable UI components
│   │   │   ├── AuthModel.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Step1SetUp.jsx
│   │   │   ├── Step2Interview.jsx
│   │   │   ├── Step3Report.jsx
│   │   │   └── Timer.jsx
│   │   ├── pages/             # Page components
│   │   │   ├── Auth.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── InterviewPage.jsx
│   │   │   ├── InterviewHistory.jsx
│   │   │   ├── InterviewReport.jsx
│   │   │   └── Pricing.jsx
│   │   ├── redux/             # Redux state management
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   ├── utils/             # Utility functions
│   │   │   └── firebase.js
│   │   ├── App.jsx            # Main app component
│   │   ├── index.css          # Global styles
│   │   └── main.jsx           # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/                    # Backend Node.js Application
│   ├── config/               # Configuration files
│   │   ├── connectDb.js      # MongoDB connection
│   │   └── token.js          # JWT token generation
│   ├── controllers/          # Route controllers
│   │   ├── auth.controller.js
│   │   ├── interview.controller.js
│   │   ├── payment.controller.js
│   │   └── user.controller.js
│   ├── middlewares/          # Custom middlewares
│   │   ├── isAuth.js         # Authentication middleware
│   │   └── multer.js         # File upload middleware
│   ├── models/               # Mongoose models
│   │   ├── interview.model.js
│   │   ├── payment.model.js
│   │   └── user.model.js
│   ├── routes/               # API routes
│   │   ├── auth.route.js
│   │   ├── interview.route.js
│   │   ├── payment.route.js
│   │   └── user.route.js
│   ├── services/             # External service integrations
│   │   ├── openRouter.service.js
│   │   └── razorpay.service.js
│   ├── index.js              # Server entry point
│   ├── package.json
│   └── .env
│
├── README.md                  # Project documentation
└── .gitignore
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### What You Can Contribute

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- 🧪 Test cases
- 🌍 Translations

### Code of Conduct

Please be respectful and constructive in your interactions. We're building an inclusive community for everyone.

---

## 💡 Lessons Learned

Building PrepMate taught us valuable lessons about:

1. **Authentication Complexity**
   - Implementing secure OAuth flows requires careful attention to detail
   - Cookie-based sessions need proper CORS and security configurations
   - Firebase popup handling requires robust error management

2. **API Integration Challenges**
   - Working with LLM APIs requires prompt engineering optimization
   - Rate limiting and cost management are crucial for production
   - Error handling for external services must be comprehensive

3. **State Management**
   - Redux Toolkit simplifies complex application state
   - Proper state normalization prevents bugs
   - Real-time updates require careful synchronization

4. **Deployment Considerations**
   - CORS configuration is critical for production
   - Environment variables must be properly secured
   - Separate client/server deployments need coordination

5. **User Experience**
   - Loading states and error messages matter
   - Smooth animations improve perceived performance
   - Clear feedback loops increase user confidence

---

## 🙏 Acknowledgments

- **Firebase** - For seamless authentication integration
- **OpenRouter** - For providing access to multiple LLM providers
- **Razorpay** - For reliable payment processing in India
- **Render** - For free backend hosting
- **MongoDB** - For flexible database solution
- **TailwindCSS** - For rapid UI development
- **Hacktoberfest 2025** - For encouraging open-source contributions

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Sahil Karmakar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

**Sahil Karmakar**
- GitHub: [@sahil43karmakar](https://github.com/sahil43karmakar)
- Email: sahil43karmakar@gmail.com
- LinkedIn: [Your LinkedIn Profile]

**Project Link:** [https://github.com/sahil43karmakar/interviewAI](https://github.com/sahil43karmakar/interviewAI)

**Live Demo:** [https://interviewai-3.onrender.com](https://interviewai-3.onrender.com)

---

## 🚀 Show Your Support

If this project helped you prepare for interviews or learn something new, please give it a ⭐️ star on GitHub!

### Don't Forget To:
- ⭐ Star this repository
- 🔔 Watch for updates
- 🍴 Fork and customize it
- 📢 Share with friends

---

## 📈 Project Stats

![Repo Stars](https://img.shields.io/github/stars/sahil43karmakar/interviewAI?style=social)
![Repo Forks](https://img.shields.io/github/forks/sahil43karmakar/interviewAI?style=social)
![Issues Open](https://img.shields.io/github/issues/sahil43karmakar/interviewAI)
![Issues Closed](https://img.shields.io/github/issues-closed/sahil43karmakar/interviewAI)
![Pull Requests](https://img.shields.io/github/issues-pr/sahil43karmakar/interviewAI)

---

<div align="center">

**Made with ❤️ by Sahil Karmakar**

[🔼 Back to Top](#prepmate-ai---ai-technical-interview-simulator)

</div>
