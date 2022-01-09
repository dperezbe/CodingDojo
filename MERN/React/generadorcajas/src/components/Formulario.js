import React, { useState } from "react";

const Formulario = ({listColor,SetListColor}) => {
    const [color, SetColor] = useState('');

    const handleColor = (e) => {
        SetColor(e.target.value);
    }

    const submitColor = (event) => {
        event.preventDefault();
        SetListColor([...listColor,color]);
        SetColor('');
    }

  return (
    <form onSubmit={submitColor}>
      <label>
        Color
        <input type="text" value ={color} onChange={handleColor}/>
      </label>
      <input type="submit" value="Add"  className="btn-add"/>
    </form>
  );
};

export default Formulario;
