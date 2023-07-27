import React from "react";
import logo from "./logo.PNG";
import logotipo from "./logotipo.png";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="absolute-container">
        <div>
          <img src={logo} className="new-logo-img" alt="logo" />
          <img src={logotipo} className="new-image" alt="Nueva imagen" />
        </div>
      </div>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <div className="center-container">
          <div className="center-content">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Bienvenido a doctorus</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute-container-bottom">
        <p>Hola, prueba sobre contenedor inferior.</p>
      </div>
    </div>
  );
}

export default App;
