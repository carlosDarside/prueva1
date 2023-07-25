import React from "react";
import logo from "./logo.PNG";
import logotipo from "./logotipo.png";
import "./App.css";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container className="main-container">
      <Grid item xs={12} className="absolute-container">
        <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: "100%" }} >
          <img src={logo} className="new-logo-img" alt="logo" />
          <img src={logotipo} className="new-image" alt="Nueva imagen" />
        </Grid>
      </Grid>
      <div className="center-container">
        <Grid item xs={3} className="center-content">
          <Grid container direction="column">
            <p>Bienvenido a doctorus</p>
          </Grid>
        </Grid>
      </div>
      <Grid item xs={12} className="absolute-container-bottom">
        <p>Hola, prueba sobre contenedor inferior.</p>
      </Grid>
    </Grid>
  );
}

export default App;
