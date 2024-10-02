import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpiar el localStorage si deseas que se borren los datos al cerrar sesión
    localStorage.clear();
    navigate('/'); // Redirige a la vista de login
  };

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1>Menú Principal</h1>
      </header>
      <div className="menu-buttons">
        <button onClick={() => navigate('/citas')}>Citas</button>
        <button onClick={() => navigate('/clientes')}>Clientes</button>
        <button onClick={() => navigate('/servicios')}>Servicios</button>
        <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Menu;
