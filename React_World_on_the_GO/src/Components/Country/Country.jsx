import React, { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleAddFlag}) => {

    const [visited, setVisited] = useState(false);

    const Visited = () => {
        setVisited(!visited);
        handleVisitedCountry(country);
    }

    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h3>Population: {country.population.population}</h3>
            <p>
                Area: {country.area.area} <br />
                {
                    country.area.area > 1000000 ? "Big Country" : "Small Country"
                }
            </p>
            <button onClick={Visited} className={`btn ${visited && 'btn-1'}`}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button onClick={() =>{handleAddFlag(country.flags.flags.png)}}>Add Flag</button>
        </div>
    );
};

export default Country;