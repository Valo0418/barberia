import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Clientes.css';

const Clientes = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [foto, setFoto] = useState(null);
  const navigate = useNavigate();

  1
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!foto) {
      alert('Por favor, selecciona una foto.');
      return;
    }

    const nuevoCliente = {
      nombre,
      apellido,
      email,
      telefono,
      foto: URL.createObjectURL(foto),
    };

    const clientesExistentes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientesExistentes.push(nuevoCliente);
    localStorage.setItem('clientes', JSON.stringify(clientesExistentes));

    setNombre('');
    setApellido('');
    setEmail('');
    setTelefono('');
    setFoto(null);
    navigate('/listado-clientes');
  };

  return (
    <div className="clientes-container">
      <h2>Agregar Cliente</h2>
      <form onSubmit={handleSubmit} className="clientes-form">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="clientes-input"
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
          className="clientes-input"
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="clientes-input"
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
          className="clientes-input"
        />
        <input
          type="file"
          onChange={(e) => setFoto(e.target.files[0])}
          accept="image/*"
          required
          className="clientes-input"
        />
        <button type="submit" className="clientes-button">Guardar Cliente</button>
      </form>
      <button onClick={() => navigate('/menu')} className="clientes-button">Menú Principal</button>
      <button onClick={() => navigate('/listado-clientes')} className="clientes-button">Lista de clientes</button>
    </div>
  );
};

export default Clientes;
