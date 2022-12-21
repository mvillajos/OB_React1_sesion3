import React, {useState} from 'react';
import {Contacto} from '../models/contacto.class'
import PropTypes from 'prop-types';


const ComponentB = ({contacto}) => {
  const [conectado, setConectado] = useState(contacto.Conectado);
  //const toggle = previous => !previous;

  return (
    <div>
        <h3>Nombre: {contacto.Nombre}</h3>
        <h3>Apellidos: {contacto.Apellidos}</h3>
        <h3>Email: {contacto.Email}</h3>
        <h4>Conexión: {conectado ? 'Contacto en línea' : 'Contacto no disponible'}</h4>
        <button onClick={() => setConectado(!conectado)}>Cambiar estado conexión</button>
    </div>
  );
};


ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ComponentB;