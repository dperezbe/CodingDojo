import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";

import { useParams } from "react-router-dom";

const styles = {
    TextField: {
        marginBottom: "1rem"
    }
}

const ProductUpdate = () => {
  const { id } = useParams();

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  
  useEffect(() => {
    axios.get("/api/product/" + id).then((res) => {
      setTitle(res.data.data.title);
      setPrice(res.data.data.price);
      setDescription(res.data.data.description);
    });
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    axios.put('/api/product/' + id, {
            title,
            price,
            description
        })
    .then(res => console.log(res));
  };

  return (
    <div className="Formulario">
      <h1>Update a Product</h1>
      <form onSubmit={updateProduct}>
        <div>
          <TextField
          fullWidth
            style={styles.TextField}
            label = "Title"
            value={title || ''}
            variant="filled"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div>
          <TextField
          fullWidth
            style={styles.TextField}
            label="Price"
            value={price || ''}
            variant="filled"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div>
          <TextField
            fullWidth
            style={styles.TextField}
            label="Description"
            value={description || ''}
            variant="filled"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <Button type="submit" variant="contained" color="primary">
          Editar
        </Button>
      </form>
    </div>
  );
};

export default ProductUpdate;
