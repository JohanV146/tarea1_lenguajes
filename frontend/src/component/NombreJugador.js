import React, { Component } from 'react';

class NombreJugadorPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreJugador: '',
      error: '',
    };
  }

  handleNombreChange = (event) => {
    this.setState({ nombreJugador: event.target.value });
  }

  handleComenzarJuego = () => {
    const { nombreJugador } = this.state;

    if (nombreJugador.trim() === '') {
      this.setState({ error: 'Por favor, ingrese su nombre.' });
    } else {
      this.setState({ error: '' });
      this.props.onComenzarJuego(nombreJugador);

      // Limpiar el campo de nombre después de comenzar el juego
      this.setState({ nombreJugador: '' });
    }
  }

  render() {
    return (
      <div className="popup">
        <input
          type="text"
          placeholder="Ingrese su nombre"
          value={this.state.nombreJugador}
          onChange={this.handleNombreChange}
        />
        {this.state.error && <p className="error-message">{this.state.error}</p>}
        <button className="btn btn-preguntados" onClick={this.handleComenzarJuego}>
          Comenzar a jugar
        </button>
      </div>
    );
  }
}

export default NombreJugadorPopup;

