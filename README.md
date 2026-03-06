# PopX Authentication UI (React Assessment)

This project is a **frontend authentication UI** built using **React, React Router, and TailwindCSS**.  
It replicates the design provided in the assessment and includes **login, account creation, and account settings pages**.

## Live UI Features

- Landing Page
- Login Page
- Create Account Page
- Account Settings Page
- Form validation
- LocalStorage based user data handling
- Responsive mobile layout (375px design)
- Navigation using React Router

---

## Tech Stack

- React (Vite)
- React Router DOM
- Tailwind CSS
- Lucide React Icons

---

## Project Structure

```bash
src
│
├── components
│ ├── LandingPage.jsx
│ ├── LoginPage.jsx
│ ├── CreateAccount.jsx
│ └── AccountPage.jsx
│
├── assets
│ └── userLogo.png
│
├── App.jsx
└── main.jsx
```

---

## Features Implemented

### Landing Page

- Welcome screen
- Navigation to Login or Create Account

### Login Page

- Email and password input
- Login button enabled only when inputs are filled
- Navigation to Account Page after login

### Create Account Page

- Full name
- Phone number (numbers only, max 10 digits)
- Email
- Password
- Company name
- Agency selection (Yes / No)

Form validation ensures all required fields are completed before account creation.

### Account Settings Page

Displays user information:

- Profile image
- Full name
- Email
- Account description

User data is retrieved from **LocalStorage**.

If LocalStorage is empty, default user data is shown.

---

## Installation

Clone the repository

```bash
git clone https://github.com/Sampath435/educase-react-assessment.git

Go to project folder

cd educase-react-assessment

Install dependencies

npm install

Run development server

npm run dev

Author

Sampath

GitHub:
https://github.com/Sampath435
```
