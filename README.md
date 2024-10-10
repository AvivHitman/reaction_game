# Reaction Game App

This is a web application that tests and provides feedback to the user on his reaction time and quick decision making. 

## Getting Started

### 1. Clone the repository

### 2. server:
  - `cd server`
  - `npm i`
  - `npm run dev` -  will run on port 8080
  - Create `.env` file with the credentials (I can give access to my Firestore instance)
  - 
### 3. Firestore:
  To connect to your own Firebase Firestore:
  - Go to the Firebase Console.
  - Create a project if you don't have one.
  - Navigate to "Project Settings" -> "Service Accounts" -> "Generate New Private Key".
  - Copy the content into the .env file.
  - Here's an example of what your `.env` file should look like:
    
    `FIREBASE_TYPE=service_account
      FIREBASE_PROJECT_ID=your-project-id
      FIREBASE_PRIVATE_KEY_ID=your-private-key-id
      FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR-PRIVATE-KEY\n-----END PRIVATE KEY-----\n"
      FIREBASE_CLIENT_EMAIL=your-client-email@your-project-id.iam.gserviceaccount.com
      FIREBASE_CLIENT_ID=your-client-id
      FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
      FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
      FIREBASE_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
      FIREBASE_CLIENT_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/your-client-email%40your-project-id.iam.gserviceaccount.com
  `

### 3. client:
  - `cd client`
  - `npm i`
  - `npm start`  -  will run on port 3000
  

