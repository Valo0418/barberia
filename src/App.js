import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import FormularioCitas from './components/FormularioCitas';
import ListadoCitas from './components/ListadoCitas';
import Clientes from './components/Clientes';
import ListadoClientes from './components/ListadoClientes';
import Servicios from './components/Servicios';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/citas" element={<FormularioCitas />} />
      <Route path="/listado-citas" element={<ListadoCitas />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/listado-clientes" element={<ListadoClientes />} />
      <Route path="/servicios" element={<Servicios />} /> {/* Ruta para servicios */}
    </Routes>
  );
};

export default App;
