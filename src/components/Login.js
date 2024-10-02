import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState(''); // Nuevo estado para la contraseña
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Almacenar datos en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('correo', correo);
    localStorage.setItem('contraseña', contraseña); // Almacenar contraseña

    // Redirigir al menú principal
    navigate('/menu');
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>El arte del Bigote</h1>
      </header>
      <div className="login-content">
        <div className="login-message">
          <h2>La mejor manera para agendar una cita</h2>
        </div>
        <div className="login-form-container">
          <button className="login-google-button">Iniciar sesión con Google</button>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="login-input"
            />
            <input
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
              className="login-input"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              className="login-input"
            />
            <input
              type="password" // Campo de contraseña
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
              className="login-input"
            />
            <button type="submit" className="login-button">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
