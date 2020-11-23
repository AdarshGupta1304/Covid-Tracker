import React, { useState, useEffect } from 'react';
import { countriesList } from '../API/GlobalDataAPI';


const DropDown = ({countryHandler}) => {

     
    const [countries,setCountries] = useState([]);
    // const [photoURL,setPhotoURL] = useState([]);

    useEffect(() => {
        const getAllCountries = async () => {
            let data = await countriesList();
            
            // console.log('countryList : ',data);

            const countryNames = data.map( (obj,i) =>  {
                return obj.country;
            } );
            setCountries(countryNames);
            // setPhotoURL(countryNames[1]);
            // const countryFlag = data.map( obj => obj.countryInfo.flag );
            // setPhotoURL(countryFlag[1]);
               
        }
        getAllCountries();
    },[]);

    const countrySetter = (event) => {
        countryHandler(event.target.value);
    }
    

    return(
       
        <section className="dropdown">
        <label htmlFor="countries" className="m-2">Countries</label>
            <select id="countries" className="dropdown" onChange={countrySetter} >
                <option className="dropdown-item" value="Global">Global</option>
                {
                    countries.map( (data,index) => {
                            return <option className="dropdown-item" key={index} value={data}>
                                        {/* <span>  
                                                <img src={photoURL} alt="flag" 
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