# React-Native-App-with-NodeJS-Backend

Introduction:

The provided project consists of a mobile application built with React Native for the frontend and a Node.js backend server. The application facilitates user authentication (login and signup) and includes functionality for updating user progress and retrieving leaderboard data.

Frontend (React Native):

Technology Stack: 

React Native, react-native-gesture-handler, @react-navigation/native.

File Structure: The frontend code resides primarily in App.js within the app directory.
Navigation: Navigation is handled using the NavigationContainer component from @react-navigation/native, with routing defined in the UserNavigator component.
User Interface: The frontend renders a simple UI containing navigation components for user authentication.
Backend (Node.js):

Technology Stack: 

Node.js, Express.js, SQLite, Redis.

File Structure: The backend code is contained within a single file, app.js.
Express Server: An Express.js server is created using the express module to handle HTTP requests.
Database Operations: SQLite is utilized for database operations, with user data stored in a table named User. The sqlite and sqlite3 modules are used to interact with the database.

User Authentication:

The server exposes endpoints for user login (/login), signup (/signup), and progress update (/update).
Login and signup operations involve querying the SQLite database for user credentials and performing authentication checks.
Leaderboard: User progress updates are stored in a Redis instance, and the leaderboard is updated accordingly. Redis is accessed using the redis module.

Security and Authentication:

User passwords are stored securely in the SQLite database, and authentication is performed securely.
Redis connection is secured using authentication with a password.

Deployment and Hosting:

The backend server is hosted on port 3000.
The Redis instance is hosted on a cloud platform, as indicated by the provided connection URL and password.
