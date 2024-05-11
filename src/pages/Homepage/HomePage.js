import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Modal from '../../components/Modal/Modal';
import { ref, onValue } from 'firebase/database';

const HomePage = ({ database }) => {
  const [pseudo, setPseudo] = useState('');
  const [avatar, setAvatar] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [gameRooms, setGameRooms] = useState([]);

  useEffect(() => {
    const gameRoomsRef = ref(database, 'gameRooms');
    onValue(gameRoomsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setGameRooms(Object.values(data));
      }
    });
  }, [database]);

  const handlePseudoChange = (e) => {
    setPseudo(e.target.value);
  }

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pseudo.trim() === '') {
      setShowModal(true);
    } else {
      // Traitement pour rejoindre un salon de jeu avec le pseudo et l'avatar sélectionnés
    }
  }

  return (
    <div className="homepage">
      <h1>Bienvenue sur MellianJeux</h1>
      <p>Entrez un pseudo pour commencer à jouer !</p>
      <div className="game-rooms">
        <h2>Salons de jeux disponibles</h2>
        <ul>
          {gameRooms.map(room => (
            <li key={room.id}>
              <p>Nom du salon : {room.name}</p>
              <p>Nombre de joueurs : {room.players}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
