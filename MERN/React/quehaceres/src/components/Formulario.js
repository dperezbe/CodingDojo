import React, { useState } from 'react';

const Formulario = ({tareas,setTareas}) => {


    const [nuevatarea, setNuevatarea] = useState('');

     const agregarTarea = (event) => {
        event.preventDefault()
        if(nuevatarea != ''){
            setTareas([...tareas,nuevatarea]);
            setNuevatarea('');
        }
    }

    return (
        <form onSubmit={agregarTarea}>
            <input 
                placeholder='Get MERN back belt'
                type='text'
                name='nuevatarea'
                value={nuevatarea}
                onChange={e => setNuevatarea(e.target.value)}
            />
            <input 
                className='btn-add'
                type='submit'
                value="Add"
            />
        </form>
    );
};

export default Formulario;