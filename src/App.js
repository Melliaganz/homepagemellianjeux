// App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import HomePage from './pages/Homepage/HomePage';
import "./App.css"
import Header from './components/Header/Header';
import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#222';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = 'initial';
      document.body.style.color = 'initial';
    }
  }, [darkMode]);
  return (
   
    <Router>
       <main>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}  />
      <Routes>
        <Route path="/" element={<HomePage database={database} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
