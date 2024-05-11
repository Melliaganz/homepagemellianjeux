// Homepage.js

import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [pseudo, setPseudo] = useState('');
  const [avatar, setAvatar] = useState('');

  const handlePseudoChange = (e) => {
    setPseudo(e.target.value);
  }

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="homepage">
      <h1>Bienvenue sur notre application de jeux</h1>
      <p>Entrez un pseudo et choisissez un avatar pour commencer à jouer !</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pseudo" value={pseudo} onChange={handlePseudoChange} />
        <select value={avatar} onChange={handleAvatarChange}>
          <option value="">Choisir un avatar</option>
          <option value="avatar1">Avatar 1</option>
          <option value="avatar2">Avatar 2</option>
          {/* Ajoutez d'autres options d'avatar ici */}
        </select>
        <button type="submit">Commencer à jouer</button>
      </form>
    </div>
  );
}

export default HomePage;
