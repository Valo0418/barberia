import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CarpetaCSS/ListadoCitas.css';

const ListadoCitas = () => {
  const [citas, setCitas] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedCita, setEditedCita] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar las citas desde localStorage
    const citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
    setCitas(citasGuardadas);
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedCita({ ...citas[index] });
  };

  const handleDelete = (index) => {
    const updatedCitas = citas.filter((_, i) => i !== index);
    setCitas(updatedCitas);
    localStorage.setItem('citas', JSON.stringify(updatedCitas));
  };

  const handleUpdate = () => {
    const updatedCitas = [...citas];
    updatedCitas[editIndex] = editedCita;
    setCitas(updatedCitas);
    localStorage.setItem('citas', JSON.stringify(updatedCitas));
    setEditIndex(-1);
    setEditedCita(null);
  };

  const handleChange = (e) => {
    setEditedCita({
      ...editedCita,
      [e.target.name]: e.target.value,
    });
  };

  const handleVolverMenu = () => {
    navigate('/menu');
  };
  const handleFormularioC = () => {
    navigate('/citas');
  };

  return (
    <div className="listado-citas-container">
      <h2>Listado de Citas</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Servicio</th>
            <th>Empleado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td><input type="text" name="fecha" value={editedCita.fecha} onChange={handleChange} /></td>
                  <td><input type="text" name="hora" value={editedCita.hora} onChange={handleChange} /></td>
                  <td><input type="text" name="servicio" value={editedCita.servicio} onChange={handleChange} /></td>
                  <td><input type="text" name="empleado" value={editedCita.empleado} onChange={handleChange} /></td>
                  <td>
                    <button onClick={handleUpdate}>Guardar</button>
                    <button onClick={() => setEditIndex(-1)}>Cancelar</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{cita.fecha}</td>
                  <td>{cita.hora}</td>
                  <td>{cita.servicio}</td>
                  <td>{cita.empleado}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Editar</button>
                    <button onClick={() => handleDelete(index)}>Eliminar</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleVolverMenu}>Menú Principal</button>
      <button onClick={handleFormularioC}>Formulario Citas</button>
    </div>
  );
};

export default ListadoCitas;