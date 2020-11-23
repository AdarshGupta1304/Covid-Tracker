import React, { useState, useEffect, Fragment } from 'react';


import './Home.css';
import Logo from '../components/Logo/Logo';
import DropDown from '../components/CountryDropDown/DropDown';
import Cards from '../components/Cards/Cards';
import CountryTable from '../components/Table/Table';
import {GlobalDataAPI, countrySpecificInfo, countriesList} from '../components/API/GlobalDataAPI';

import Line_Chart from '../components/Chart/LineChart';
import BarChart from '../components/Chart/BarChart';
// import Map from '../components/Map/Map';

// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Home = () => {

  // States for the select value of countries
  const [country,setCountry] = useState('Global');
  

  // Creating state for global data
  const [globalData,setGlobalData] = useState({
      totalCases: '',
      activeCases: '',

      Infected: '',
      recovered: '',
      deaths: '',

      todayCases: '',
      todayRecovered: '',
      todayDeaths: '',
  });

  // States to keep data of every country
  const[countryData,setCountryData] = useState([]);

    // Creating State for Historical Data   

  // Fetching the global data from API
  useEffect(() => {
    const worldwide = async () => {
      let data = (country === 'Global') ? await GlobalDataAPI() : await countrySpecificInfo(country) ;
      
        data = data.data;
        // console.log('final data : ',data);
        setGlobalData({
          totalCases: data.cases,
          activeCases: data.active,

          Infected: data.active,
          recovered: data.recovered,
          deaths: data.deaths,

          todayCases: data.todayCases,
          todayRecovered: data.todayRecovered,
          todayDeaths: data.todayDeaths,
        });
    }
    // console.log('state is ',globalData);
    worldwide();
  },[country]);


    useEffect( () => {
        const countryInfo = async () => {
            const data = await countriesList();
            // console.log('data fetched is : ',data);

            // Sorting the data in descending order on the basis of Number of cases
            data.sort((a,b) => (a.cases < b.cases ? 1 : -1) );
            setCountryData(data);
            // console.log('state countryData is11 : ',countryData);
        }
        countryInfo();
    },[]);

    
    return(
        <>
            <section className="container"> <div className="row"> <Logo /> </div> </section>
            <section> <DropDown countryHandler={setCountry}  /> </section>
            <section className="container"> 
                <div className="row">
                        <Cards category="Infected" cases={globalData.todayCases} totalCases={globalData.totalCases} />
                        <Cards category="Recovered" cases={globalData.todayRecovered} totalCases={globalData.recovered} />
                        <Cards category="Deaths" cases={globalData.todayDeaths} totalCases={globalData.deaths} />
                </div>
                
             </section>
        </>
    );
}

export default Home;