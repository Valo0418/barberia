import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CarpetaCSS/FormularioCitas.css';

const FormularioCitas = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState(''); // Servicio seleccionado
  const [selectedEmployee, setSelectedEmployee] = useState(''); // Empleado seleccionado
  const navigate = useNavigate();

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value); // Cambiar el servicio seleccionado
  };

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value); // Cambiar el empleado seleccionado
  };

  const handleAceptarCita = () => {
    if (!selectedDate || !selectedTime || !selectedService || !selectedEmployee) {
      alert("Por favor, complete todos los campos antes de aceptar la cita.");
      return;
    }

    // Guardar la cita en localStorage
    const cita = {
      fecha: selectedDate,
      hora: selectedTime,
      servicio: selectedService,
      empleado: selectedEmployee,
    };

    const citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
    citasGuardadas.push(cita);
    localStorage.setItem('citas', JSON.stringify(citasGuardadas));

    // Navegar a la vista de ListadoCitas
    navigate('/listado-citas');
  };

  const handleVolverMenu = () => {
    navigate('/menu');
  };
  const handleCitas = () => {
    navigate('/listado-citas');
  };

  return (
    <div className="formulario-citas-container">
      <div className="formulario-citas-list">
        <h2>Seleccione un Servicio</h2>
        <select value={selectedService} onChange={handleServiceChange}>
          <option value="">Seleccione un servicio</option>
          <option value="Corte de Cabello">Corte de Cabello</option>
          <option value="Afeitado y Perfilado de Barba">Afeitado y Perfilado de Barba</option>
          <option value="Lavado de Cabello">Lavado de Cabello</option>
          <option value="Tintura de Barba y Cabello">Tintura de Barba y Cabello</option>
          <option value="Tratamientos Faciales">Tratamientos Faciales</option>
        </select>

        <h2>Seleccione un Empleado</h2>
        <select value={selectedEmployee} onChange={handleEmployeeChange}>
          <option value="">Seleccione un empleado</option>
          <option value="Juan Pérez">Juan Pérez</option>
          <option value="María López">María López</option>
          <option value="Carlos García">Carlos García</option>
        </select>
      </div>

      <div className="formulario-citas-calendar">
        <h2>Seleccione una fecha</h2>
        <div className="calendar">
          {[...Array(30)].map((_, index) => (
            <div
              key={index}
              className={`day ${selectedDate === index + 1 ? 'selected' : ''}`}
              onClick={() => handleDateClick(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>

        <h2>Seleccione una hora</h2>
        <input type="time" value={selectedTime} onChange={handleTimeChange} />

        <div className="buttons">
          <button onClick={handleVolverMenu}>
            Menú Principal
          </button>
          <button onClick={handleAceptarCita}>
            Aceptar Cita
          </button>
          <button onClick={handleCitas}>
            Listado de citas
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormularioCitas;
