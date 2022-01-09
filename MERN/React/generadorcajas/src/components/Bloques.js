import React from 'react';

const Bloques = ({listColor,SetListColor}) => {

    const mystyle = {
        backgroundColor: "blue",     
      };

    return (
        <div className='display-flex'>
            {listColor.map((item,i)=>
                <div key={i} className='bloque-color'  style={{backgroundColor: item}}>
                </div>
            )}
           
        </div>
    );
};

export default Bloques;