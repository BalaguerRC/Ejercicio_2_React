import React,{useState} from 'react';
import { Contact } from '../models/contact.class';
import Contacto from './forms/Contacto';


const ContactoComponent = () => {
    const name="Jose";
    const lastname="Castillo";
    const email="example@gmail.com";
    const [state,setState]= useState(false);
    const defaultContacto= new Contact(name,lastname,email,state);

    const changeState=()=>{
        if(state){
            setState(false);
        }
        else{
            setState(true);
        }
    }

    return (
        <div>
            <div><h1>Contacto:</h1> </div>
            <Contacto props={defaultContacto}></Contacto>
            <button onClick={changeState}>Cambiar Estado</button>
        </div>
    );
};


export default ContactoComponent;
