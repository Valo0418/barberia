import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CarpetaCSS/Servicios.css';

const Servicios = () => {
  const navigate = useNavigate();

  const servicios = [
    {
      nombre: 'Corte de Cabello',
      descripcion: 'Un corte de cabello profesional para todo tipo de estilos.',
      costo: '$15.00',
    },
    {
      nombre: 'Afeitado y Perfilado de Barba',
      descripcion: 'Afeitado clásico con navaja y perfilado preciso.',
      costo: '$10.00',
    },
    {
      nombre: 'Lavado de Cabello',
      descripcion: 'Lavado de cabello con productos de alta calidad.',
      costo: '$5.00',
    },
    {
      nombre: 'Tratamientos Capilares',
      descripcion: 'Tratamientos especiales para revitalizar el cabello.',
      costo: '$25.00',
    },
    {
      nombre: 'Tintura de Barba y Cabello',
      descripcion: 'Servicio de tintura con productos de larga duración.',
      costo: '$20.00',
    },
    {
      nombre: 'Manicure y Pedicure',
      descripcion: 'Cuidado de uñas con los mejores productos.',
      costo: '$18.00',
    },
    {
      nombre: 'Masajes Relajantes',
      descripcion: 'Masajes para aliviar el estrés y la tensión.',
      costo: '$30.00',
    },
    {
      nombre: 'Exfoliación del Cuero Cabelludo',
      descripcion: 'Exfoliación para limpiar y rejuvenecer el cuero cabelludo.',
      costo: '$22.00',
    },
    {
      nombre: 'Tratamientos Faciales', // Servicio añadido
      descripcion: 'Tratamientos para rejuvenecer la piel del rostro.',
      costo: '$35.00',
    },
  ];

  const handleVolverMenu = () => {
    navigate('/menu');
  };

  return (
    <div className="servicios-container">
      <h2>Catálogo de Servicios</h2>
      <div className="servicios-lista">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio-item">
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
            <p><strong>Costo: {servicio.costo}</strong></p>
          </div>
        ))}
      </div>
      <button onClick={handleVolverMenu}>Menú Principal</button>
    </div>
  );
};

export default Servicios;
