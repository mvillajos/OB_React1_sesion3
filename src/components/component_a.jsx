import React from 'react';
import {Contacto} from '../models/contacto.class'
import ComponentB from './component_b';

const ComponentA = () => {
  
  const defaultContact = new Contacto('Mariano','Villajos','mvil@gmail.com',true);
  
  return (
    <div>
        <h1>Datos de un contacto</h1>
        <ComponentB contacto={defaultContact}></ComponentB>
    </div>
  );
};

export default ComponentA;
