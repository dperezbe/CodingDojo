import React,{useState} from 'react';
import {TextField, Button} from  '@material-ui/core';
import axios from 'axios';

const styles = {
    TextField: {
        marginBottom: "1rem"
    }
}



const ProductForm = ({setProductdB}) => {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    });

   

    const handlerform = (e) =>{
        setProduct({...product,[e.target.name] :e.target.value})
               
    }

      const btnregistrar = (e) =>{
        e.preventDefault();
        console.log(product);
        axios.post(`http://127.0.0.1:8000/api/product/new`,product)
        .then(response => 
            axios.get(`http://127.0.0.1:8000/api/product/show`)
            .then(response => setProductdB(response.data) )
            .catch(e => console.log(e))
             )
        .catch(e => console.log(e))

       
    }

    return (
        <div>
            <div className="Formulario">
                <h2>Product Manager</h2>
                <form onSubmit={btnregistrar}>
                    <TextField style={styles.TextField} fullWidth id="outlined-basic" label="Title" variant="filled" name = "title" onChange={handlerform}/>
                    <TextField style={styles.TextField}  fullWidth id="outlined-basic" label="Price" variant="filled" name = "price" onChange={handlerform}/>
                    <TextField style={styles.TextField} fullWidth id="outlined-basic" label="Description" variant="filled" name = "description" onChange={handlerform} />
                    <Button type="submit" variant="contained" color="primary">
                    Create
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;