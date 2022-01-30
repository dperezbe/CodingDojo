import React,{useState} from 'react';
import ProductShow from './ProductShow';
import ProductForm from './ProductForm';

const Product = () => {
    const [productDb, setProductdB] = useState();

    return (
        <div>
        <ProductForm 
            setProductdB = {setProductdB}
        />
        <ProductShow 
            productDb = {productDb}
            setProductdB = {setProductdB}
        />
        </div>
    );
};

export default Product;