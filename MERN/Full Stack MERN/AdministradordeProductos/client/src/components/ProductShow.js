import React, { useEffect ,useState} from 'react';
import axios from 'axios';


  
  const ProductShow = ({productDb,setProductdB}) => {


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/product/show`)
        .then(response => setProductdB(response.data) )
        .catch(e => console.log(e))
        
      }, []);
      
    return (
        <div>
            <h2>All Products</h2>
            <ul>
            { productDb != null ?  productDb.map(element => 
            <a href={element._id} key={element._id}> <li >{element.title}</li></a>
           ) : null }
          
            </ul>
        </div>
    );
};

export default ProductShow;