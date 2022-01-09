import React,{useState} from 'react';

const Options = ({tareas,setTareas}) => {

    const [isChecked, setIsChecked] = useState({});


    const tareacompleta = (e) => {
        if(isChecked[e.target.value] == null){
            setIsChecked({...isChecked,[e.target.value]:true});

        }
        else{
            setIsChecked({...isChecked,[e.target.value]: !isChecked[e.target.value]});
        }
    }

    const deletetarea = (e) =>{
        setTareas(tareas.filter(t => t!= e.target.name));
    }


    return (

        <ul>{tareas.map((e,i) =>  
            <li key={i}> 

           {isChecked[e] ? <span>{e}</span>: e} 

            <input 
                type="checkbox"
                checked={isChecked[e] ? true:false}
                value={e}
                onChange={tareacompleta}
            />

            <input
                type="submit"
                value="Delete" 
                name={e}
                className="btn-delete"
                onClick={deletetarea}
            />
            </li>

        )}</ul>

    );
};

export default Options;