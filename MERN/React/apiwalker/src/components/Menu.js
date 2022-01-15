import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Info from './Info';

const Menu = (props) => {

    const [search,setSearch] = useState({
        category: 'people',
        id: props.id ? props.id : ''
    });


    const [info, setInfo] = useState();

      const  {category,id} = search;

      const requestAPI = () => {
        switch(search.category) {
            case 'people':
                axios.get(`https://swapi.dev/api/people/${id}`)
                    .then(response => setInfo(response))
                    .catch(e => setInfo(e))
              break;
            case 'planets':
                axios.get(`https://swapi.dev/api/planets/${id}`)
                    .then(response => setInfo(response))
                    .catch(e => setInfo(e))
              break;
            case 'films':
                axios.get(`https://swapi.dev/api/films/${id}`)
                .then(response => setInfo(response))
                .catch(e => setInfo(e))
                break;
            case 'species':
                axios.get(`https://swapi.dev/api/species/${id}`)
                .then(response => setInfo(response))
                .catch(e => setInfo(e))
                break;
            case 'vehicles':
                axios.get(`https://swapi.dev/api/vehicles/${id}`)
                .then(response => setInfo(response))
                .catch(e => setInfo(e))
                break;      
            case 'starships':
                axios.get(`https://swapi.dev/api/starships/${id}`)
                .then(response => setInfo(response))
                .catch(e => setInfo(e))
                break;          
          }
      }

      const handlerform = (e) =>{
        setSearch({...search,[e.target.id] :e.target.value})
        setInfo(null);
      }



    const btnsearch = (e) =>{
        e.preventDefault();
        requestAPI();
    }

    useEffect(() => {
        if(id != ''){
        requestAPI();
        }
      }, [search]);

    return (
        <>
        <form onSubmit={btnsearch}>
            <div className='search'>
                <label >Search for:</label>
                <select name="category" id="category" value={category} onChange={handlerform}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="films">Films</option>
                        <option value="species">Species</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="starships">Starships</option>
                </select>
            </div>


            <div  className='showid'>
                <label>id:</label>
                <input  
                    type="text"
                    className='input-id'
                    id ="id"
                    value={id}
                    onChange={handlerform}
                />

                <input 
                    type="submit"
                    value="Search"
                    className='btn-search'
                />
            </div>
        </form>
        { info != null ? 
        <Info 
            info={info}
            category = {category}
        />
        : null}
        </>
    );
};

export default Menu;