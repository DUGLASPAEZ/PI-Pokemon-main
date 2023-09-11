import './App.css';
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import { useState } from 'react'; // Importa useState
import Home from "./Views/HomePage/Home.jsx";
import Form from "./Views/FormPage/Form";
import Detail from "./Views/DetailPage/Detail.jsx";
import Landing from './Views/LandingPage/Landing.jsx';
import NavBar from './Components/NavBarPage/NavBar';
import About from './Views/AboutPage/About';
import Pokemon from './Components/pokemonPage/Pokemon';

function App() {
  const [showNavBar, setShowNavBar] = useState(false); // Estado para controlar si se muestra el NavBar

  // Función para mostrar el NavBar
  const showNavBarHandler = () => {
    setShowNavBar(true);
  };

  return (
    <Router>
      {showNavBar && <NavBar />} {/* Renderiza el NavBar si showNavBar es true */}
      <Routes>
        <Route  path='pokemon' element = {<Pokemon/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/about' element={<About />} />
        <Route path='' element={<Landing onEnterClick={showNavBarHandler} />} />
        {/* Utiliza Navigate para redirigir a /home después de hacer clic en ENTER */}
        {showNavBar && <Route path="/" element={<Navigate to="/home" />} />}
      </Routes>
    </Router>
  );
}

export default App;





