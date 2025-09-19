import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({promise}) => {
    const CountryData = use(promise);
    const Country1 = CountryData.countries;

    const [visitedCountry, setVisitedCountry] = useState([])
    const [addflag, setAddflag] = useState([])

    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountry,country]
        setVisitedCountry(newVisitedCountry)
    }

    const handleAddFlag = (flag) =>{
        const newAddFlag = [...addflag,flag]
        setAddflag(newAddFlag)
    }

    return (
        <div>
            <h1>Country</h1>
            <h1>Total Visited Country: {visitedCountry.length}</h1>
            <h1>Total Flag Added: {addflag.length}</h1>
            <div className='img-container'>
                {
                    addflag.map((flag) =><img src={flag} alt="flag image" />)
                }
            </div>
            <div className='countries'>
                {
                    Country1.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountry={handleVisitedCountry} handleAddFlag={handleAddFlag}></ Country>)
                }
            </div>
        </div>
    );
};

export default Countries;