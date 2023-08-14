import React, { Component } from 'react';
import './index.css';
import { obtenerContenido } from './api';
import NombreJugadorPopup from './component/NombreJugador';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contenido: '',
      mostrarPopup: false,
      nombreJugador: '',
      juegoIniciado: false,
    };
  }

  handleClick = () => {
    this.setState({ mostrarPopup: true });
  }

  handleComenzarJuego = (nombreJugador) => {
    this.setState({ nombreJugador, mostrarPopup: false, juegoIniciado: true });
  }

  render() { 
    return (
      <div className="app container-fluid bg-image">
        <div className="jumbotron">
          <div className="buttons-container mt-4">
            {this.state.juegoIniciado ? (
              /* Mostrar pantalla de bienvenida después de comenzar el juego */
              <div>
                <h2>Bienvenido a la pantalla de juego, {this.state.nombreJugador}!</h2>
              </div>
            ) : (
              /* Mostrar botón de inicio */
              <div>
                <button className="btn btn-preguntados btn-lg mr-3" onClick={this.handleClick}>
                  Jugar
                </button>
                {this.state.mostrarPopup && (
                  <NombreJugadorPopup onComenzarJuego={this.handleComenzarJuego} />
                )}
              </div>
            )}
          </div>
          <div className="resultado mt-4">
            {this.state.contenido && <p>{this.state.contenido}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;


