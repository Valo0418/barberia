import React from 'react';
import { Link } from 'react-router-dom';

const MenuPrincipal = () => {
  return (
    <div>
      <h1>Menú Principal</h1>
      <Link to="/clientes">Clientes</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/citas">Citas</Link>
    </div>
  );
};

export default MenuPrincipal;
