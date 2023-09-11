import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../LandingPage/Landing.css';

const Landing = () => {
  const navigate = useNavigate(); // Obtiene el objeto de navegación

  const handleEnterClick = () => {
    // Llama a navigate para redirigir a /home
    navigate('/home');
  };

  return (
    <div className="fondoLanding">
      <button className="botonInicio" onClick={handleEnterClick}>ENTER</button>
      <h1 className="h1Inicio">WITH MORE THAN 200 TO EXPLORE</h1>
    </div>
  );
};

export default Landing;

