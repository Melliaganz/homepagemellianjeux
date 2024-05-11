import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Modal from '../../components/Modal/Modal';
import { ref, onValue, push } from 'firebase/database';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = ({ database }) => {
  const [pseudo, setPseudo] = useState('');
  const [avatar, setAvatar] = useState('');
  const [showModal, setShowModal] = useState(true);
  const [gameRooms, setGameRooms] = useState([]);
  const [newRoomName, setNewRoomName] = useState('');
  const navigate = useNavigate(); // Access to the navigate function

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

  const handleNewRoomNameChange = (e) => {
    setNewRoomName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pseudo.trim() === '') {
      alert('Veuillez entrer un pseudo valide');
    } else {
      const newRoomId = push(ref(database, 'gameRooms'), {
        name: newRoomName,
        players: 0 // Initial number of players
      }).key;
      // Redirect the user to the new room using navigate function
      navigate(`/rooms/${newRoomId}`);
    }
  }

  return (
    <div className="homepage">
      <h1>Bienvenue sur MellianJeux</h1>
      <div className="game-rooms">
        <h2>Salons de jeux disponibles</h2>
        <ul>
          {gameRooms.map(room => (
            <li key={room.id}>
              <Link to={`/rooms/${room.id}`}>
                <p>Nom du salon : {room.name}</p>
                <p>Nombre de joueurs : {room.players}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="create-room">
        <h2>Créer un nouveau salon</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nom du salon" value={newRoomName} onChange={handleNewRoomNameChange} />
          <button type="submit">Créer</button>
        </form>
      </div>
      {showModal && (
        <Modal>
          <h2>Bienvenue sur MellianJeux !</h2>
          <p>Veuillez entrer un pseudo pour commencer à jouer.</p>
          <input type="text" placeholder="Pseudo" value={pseudo} onChange={handlePseudoChange} />
          <button onClick={handleSubmit}>Créer</button>
          <button onClick={() => setShowModal(false)}>Fermer</button>
        </Modal>
      )}
    </div>
  );
}

export default HomePage;
