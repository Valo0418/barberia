import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListadoClientes.css'; // Asegúrate de tener un archivo CSS para estilizar

const ListadoClientes = () => {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const clientesGuardados = JSON.parse(localStorage.getItem('clientes')) || [];
    setClientes(clientesGuardados);
  }, []);

  const handleEliminar = (index) => {
    const nuevosClientes = [...clientes];
    nuevosClientes.splice(index, 1);
    setClientes(nuevosClientes);
    localStorage.setItem('clientes', JSON.stringify(nuevosClientes));
  };

  return (
    <div className="listado-clientes-container">
      <h2>Listado de Clientes</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Foto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefono}</td>
              <td>
                <img src={cliente.foto} alt="Foto del cliente" style={{ width: '50px', height: '50px' }} />
              </td>
              <td>
                <button onClick={() => handleEliminar(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/menu')}>Menú Principal</button>
    </div>
  );
};

export default ListadoClientes;
