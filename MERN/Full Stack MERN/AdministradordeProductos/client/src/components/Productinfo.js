import React, { useState ,useEffect} from 'react';
import axios from 'axios';

import {
    useParams
  } from 'react-router-dom';
import ProductDelete from './ProductDelete';

const Productinfo = () => {
    const { id } = useParams();
    const [productId, setProductoId] = useState();
  
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/product/${id}`)
        .then(response => setProductoId(response.data.data))
        .catch(e => console.log(e))
      }, []);

    return (
        <div>
            <h2>Product detail:</h2>
            {productId != null ?
            <div> 
                <h3>{productId.title}</h3>
                <p>{productId.price}</p>
                <p>{productId.description}</p>
             </div>
            : null}
           
            <ProductDelete
                id={id}
            />
        </div>
    );
};

export default Productinfo;