import React, { useState, useEffect, Component } from 'react';

const Clock = () => {

    const StateNew = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martín",
        apellidos: "San José"
    }

    const [data, setData] = useState(StateNew);

    const Update = () => {
        setData({
            fecha: new Date(),
            edad: data.edad + 1,
            nombre: data.nombre,
            apellidos: data.apellidos,
        })
    }

    useEffect(() => {
        const Interval = setInterval(() => {
            Update();
        }, 1000)
        return () => {
            clearInterval(Interval);
        };
    });
    return (
        <div>
            <div>
                <h2>
                    Hora Actual:
                    {data.fecha.toLocaleTimeString()}
                </h2>
                <h3>{data.nombre} {data.apellidos}</h3>
                <h1>Edad: {data.edad}</h1>
            </div>
        </div>
    );
}

export default Clock;
