import React from 'react';
import ShowInfo from './ShowInfo';

const Info = ({info,category}) => {
    const {status , data} = info;
    console.log(status);
    return (
        <div>
            {status == 200 ? 
             <ShowInfo 
                data = {data} 
                category = {category}
                /> 
            : 
            <h2>Estos no son los droides que está buscando</h2> 
            }
        </div>
    );
};

export default Info;