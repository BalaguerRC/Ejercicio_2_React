import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const Contacto = ({props}) => {
    return (
        <div>
            <h3>Nombre: {props.name}</h3>
            <h3>Apellido: {props.lastname}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Estado: {props.connection ? 'Contacto En Línea':'Contacto No Disponible'}</h3>
        </div>
    );
};


Contacto.propTypes = {
    props:PropTypes.instanceOf(Contact)
};


export default Contacto;
