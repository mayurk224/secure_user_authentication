# SafeSign

SafeSign is a secure user authentication application built using React, Vite, and Firebase. It supports features like user registration, login, password management, and role-based access control.

## Features

- **User Authentication**: Register, login, and password management with Firebase Authentication.
- **Role-Based Access Control**: Different user roles (admin, user) with access to specific pages.
- **Real-Time Database**: Uses Firebase Firestore for storing user data.
- **Protected Routes**: Public and protected routes based on user authentication and roles.
- **Dynamic Page Titles**: Automatically updates the browser tab title based on the current page.
- **Offline Support**: Redirects to a maintenance page if the internet connection is lost.

## Live Demo

The project is hosted on [Vercel](https://vercel.com). You can access the live demo [here](https://secure-user-authentication-fudvetvcq-mayurk224s-projects.vercel.app/).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **Firebase**: Backend-as-a-Service (BaaS) for authentication and real-time data.
- **React Router**: Declarative routing for React applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [Firebase CLI](https://firebase.google.com/docs/cli)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mayurk224/secure_user_authentication.git
    ```

2.  **Install Dependencies:**
    npm install

3.  **Configure Firebase:**
    Create a .env file in the root directory and add your Firebase configuration:

    VITE_FIREBASE_API_KEY=your-api-key
    VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    VITE_FIREBASE_APP_ID=your-app-id

4.  **Run the project locally:**
    npm run dev

### Deployment

To deploy the project on Vercel:

1.Push your code to a GitHub repository.
2.Go to the Vercel dashboard and import your project.
3.Set the environment variables on Vercel:
Go to your project settings on Vercel.
Under "Environment Variables," add the same keys as in your .env file.
4.Deploy the project.

### Folder Structure

secure_user_authentication/
│
├── public/ # Public assets
│ └── index.html # HTML template
├── src/ # Source code
│ ├── components/ # Reusable components
│ ├── contexts/ # Context Providers (e.g., UserProvider)
│ ├── pages/ # Page components (Dashboard, Login, etc.)
│ ├── routes/ # Route components (PublicRoute, ProtectedRoute)
│ ├── firebaseConfig.js # Firebase configuration
│ ├── App.jsx # Main App component
│ └── main.jsx # Entry point
└── .env # Environment variables (not in the repository)

### Important Notes

Do not expose sensitive credentials (like Firebase API keys) publicly. Use environment variables to secure them.
Ensure that you have proper rules set in Firebase Firestore for security.
Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Contact

For any questions or feedback, please contact mayurkamble0250@gmail.com.
