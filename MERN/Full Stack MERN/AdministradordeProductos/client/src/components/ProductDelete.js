import React from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@material-ui/core";
import axios from 'axios';
import { useNavigate  } from "react-router-dom";


const ProductDelete = ({id,title,setProductdB}) => {
    
    let navigate = useNavigate();

    const btndelete = (e) =>{
        e.preventDefault();

        
        axios.delete(`http://127.0.0.1:8000/api/product/`+id)
        .then(response => 
            axios.get(`http://127.0.0.1:8000/api/product/show`)
            .then((response) => setProductdB(response.data))
            .catch((e) => console.log(e))
        )
        .catch(e => console.log(e))

        
       

        navigate(`/`);

      
    }

    return (
        <div>
            <a href={id}>
                {title}
            </a>
            <Button size="small" variant="outlined" startIcon={<DeleteIcon />} onClick={btndelete}>
                Delete 
            </Button>
        </div>
    );
};

export default ProductDelete;