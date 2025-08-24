# Testing_And_Deployment

This project is a React-based To-Do application developed using Test-Driven Development (TDD) principles. It integrates Jest and React Testing Library for unit and integration testing, and employs GitHub Actions for Continuous Integration and Deployment (CI/CD).

# 🚀 Features

React Application: Built with React, utilizing Hooks and Context API.

Test-Driven Development: Developed using TDD methodology.

Unit & Integration Testing: Implemented with Jest and React Testing Library.

CI/CD Pipeline: Automated workflows using GitHub Actions.

Production Build: Optimized for production deployment.
DagsHub

# 🛠️ Prerequisites

Ensure you have the following installed:

Node.js

npm

Git

# 📦 Installation

1. Clone the Repository:

git clone https://github.com/charanmailavarapu/week_7_day_4_Testing_And_Deployment.git
cd week_7_day_4_Testing_And_Deployment


2. Install Dependencies:

npm install


3. Start the Development Server:

npm start


This will launch the application in your default web browser.

# 🧪 Running Tests

To execute the test suite:

npm test


This command runs the Jest test runner in interactive watch mode.

# 🏗️ Build for Production

To create a production build:

npm run build


The build artifacts will be stored in the build/ directory.

# ⚙️ Application Architecture

The project structure is as follows:

src/
├── components/
│   ├── TaskInput.jsx       # Input field + button for adding tasks
│   ├── TaskItem.jsx        # Individual task component
│   ├── TaskList.jsx        # List of tasks
│   └── ...
├── context/
│   ├── TaskContext.jsx     # Context API for task state management
│   └── ...
└── App.jsx                 # Main application component


# 🔄 CI/CD Pipeline

The project utilizes GitHub Actions for automating workflows:
DagsHub

CI Workflow: Runs tests on pull requests and pushes to the main branch.

CD Workflow: Deploys the application to a specified environment upon successful tests.
DEV Community
+1

These workflows are defined in the .github/workflows/ directory.

# 📄 License

This project is licensed under the MIT License.
