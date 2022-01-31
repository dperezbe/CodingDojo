import React, { useEffect } from "react";
import axios from "axios";
import ProductDelete from "./ProductDelete";

const ProductShow = ({ productDb, setProductdB }) => {
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/product/show`)
      .then((response) => setProductdB(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {productDb != null
          ? productDb.map((element) => (
                <li key={element._id}>
                  <ProductDelete id={element._id} title={element.title} setProductdB = {setProductdB}/>
                </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ProductShow;
