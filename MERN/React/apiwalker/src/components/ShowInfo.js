import React from 'react';

const ShowInfo = ({data,category}) => {
    const {name,height,birth_year,gender,hair_color,rotation_period,
        orbital_period,diameter,climate,title,
        episode_id,opening_crawl,director,producer,
        classification,designation,average_height,skin_colors,
        model,manufacturer,cost_in_credits,length,
        

    
    } = data;
    return (
        <div className='info'> 
            
            {category == 'people'? 
                <>
                <h1>{name}</h1>
                <p>height: {height}</p>
                <p>birth_year: {birth_year}</p>
                <p>hair_color: {hair_color}</p>
                <p>gender: {gender}</p>
                </>
            : null}
            { category == 'planets'?
            <>
                <h1>{name}</h1>
                <p>rotation_period: {rotation_period}</p>
                <p>orbital_period: {orbital_period}</p>
                <p>diameter: {diameter}</p>
                <p>climate: {climate}</p>
            </> : null
            }
            { category == 'films'?
            <>
                <h1>{title}</h1>
                <p>episode_id: {episode_id}</p>
                <p>opening_crawl: {opening_crawl}</p>
                <p>director: {director}</p>
                <p>producer: {producer}</p>
            </> : null
            }
            { category == 'species'?
            <>
                <h1>{name}</h1>
                <p>classification: {classification}</p>
                <p>designation: {designation}</p>
                <p>average_height: {average_height}</p>
                <p>skin_colors: {skin_colors}</p>
            </> : null
            }
            { category == 'vehicles'?
            <>
                <h1>{name}</h1>
                <p>classification: {model}</p>
                <p>designation: {manufacturer}</p>
                <p>average_height: {cost_in_credits}</p>
                <p>skin_colors: {length}</p>
            </> : null
            }
             { category == 'starships'?
            <>
                <h1>{name}</h1>
                <p>classification: {model}</p>
                <p>designation: {manufacturer}</p>
                <p>average_height: {cost_in_credits}</p>
                <p>skin_colors: {length}</p>
            </> : null
            }


        </div>
    );
};

export default ShowInfo;