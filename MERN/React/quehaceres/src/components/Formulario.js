import React, { useState } from 'react';

const Formulario = ({tareas,setTareas}) => {


    const [nuevatarea, setNuevatarea] = useState();

    const handleInputChange = (event) => {
        setNuevatarea(event.target.value)
    }

    
     const agregarTarea = (event) => {
        event.preventDefault()
        setTareas([...tareas,nuevatarea]);
    }

    return (
        <form onSubmit={agregarTarea}>
            <input 
                type='text'
                name='nuevatarea'
                onChange={handleInputChange}
            />
            <input 
                type='submit'
            />
        </form>
    );
};

export default Formulario;