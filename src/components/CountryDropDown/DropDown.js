import React, { useState, useEffect, useCallback } from 'react';
import { countriesList } from '../API/GlobalDataAPI';


const DropDown = ({countryHandler, mapCoord}) => {


     
    const [countries,setCountries] = useState([]);
    // const [flag,setFlag] = useState([]);
    const [country,setCountry] = useState('');
    
    useEffect(() => {
        const getAllCountries = async () => {
            let data = await countriesList();
            
            // console.log('countryList : ',data);

            const countryNames = data.map( (obj,i) =>  {
                return obj.country;
            } );
            setCountries(countryNames);

            // const flagUrl = data.map( obj => obj.countryInfo.flag);
            // setFlag(flagUrl);
        }
        getAllCountries();
    },[]);

    const countrySetter = (event) => {
        countryHandler(event.target.value);
        setCountry(event.target.value);
        // console.log(country);
    }

    useEffect( () => {

        const getAllCountries = async () => {
        let data = await countriesList();
            
         data.map( (obj) => {
            
            if(country === obj.country){
                 const lat = obj.countryInfo.lat;
                 const long = obj.countryInfo.long;
                 mapCoord([lat,long]);
                //  console.log('map coordinates are changed! to ',country);
            }
        });
    }
    getAllCountries();

    }, [country]);

    // const memoizedCountry = useCallback( (event) => {
    //     countryHandler(event.target.value);
    //     // setCountry(event.target.value);
    //     // console.log(country);
    // },[countryHandler])
    
    

    return(
       
        <section className="dropdown">
        <label htmlFor="countries" className="m-2">Countries</label>
            <select id="countries" className="dropdown" onChange={countrySetter} >
                <option className="dropdown-item" value="Global">Global</option>
                {
                    countries.map( (data,index) => {
                            return <option className="dropdown-item" key={index} value={data}>
                                        {/* <span>  
                                        console.log(flag[index]);
                                                <img src={flag[index]} alt="flag" 
                                                    className="flags"
                                                />
                                            </span> */}
                                        {data}
                                    </option>
                    })
                }
                
            </select>
        </section>
    );
}

export default DropDown;