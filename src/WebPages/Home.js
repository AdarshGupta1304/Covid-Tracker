import React, { useState, useEffect, Fragment } from 'react';

import './Home.css';
import Logo from '../components/Logo/Logo';
import DropDown from '../components/CountryDropDown/DropDown';
import Cards from '../components/Cards/Cards';
// import CountryTable from '../components/Table/Table';
import {GlobalDataAPI, countrySpecificInfo, countriesList} from '../components/API/GlobalDataAPI';

import LineChart from '../components/Chart/LineChart';
import BarChart from '../components/Chart/BarChart';
import Map from '../components/Map/Map';

import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';



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

  // Map states
  // const myCoord = {lat: 20.5937, lng: 78.9629};
  const [mapCenter,setMapCenter] = useState([20,77]);
  const [mapZoom,setMapZoom] = useState(3);


  // Modal for chart
  const [show,setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
        
    setMapZoom(5);
    }
    // console.log('state is ',globalData);
    worldwide();
    console.log(mapCenter,mapZoom);
  },[mapCenter,country,mapZoom]);


  // Getting country list and sorting them...
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

    
    
  return (
    <Fragment>

      <Container fluid>
        <Row className="justify-content-center">
        {/* Logo and Dropdown */}
          <Row>
            <Col md={10} lg={10}> <Logo /> </Col>
            <Col md={2} lg={2}> <DropDown  countryHandler={setCountry} mapCoord={setMapCenter} /> </Col>
          </Row>
        
        {/*  */}
          <Col md={8}>
            <Row className="justify-content-center my-3">
                <Col md={3} xs={6}> <Cards category="Infected" cases={globalData.todayCases} totalCases={globalData.totalCases} /> </Col>
                <Col md={3} xs={6}> <Cards category="Recovered" cases={globalData.todayRecovered} totalCases={globalData.recovered} /> </Col>
                <Col md={3} xs={6}> <Cards category="Deaths" cases={globalData.todayDeaths} totalCases={globalData.deaths} /> </Col>         
            </Row>
          </Col>
          {/* Chart on right side */}
          <Col md={4} xs={12} >
            <Button
                className="d-{xs,sm}-none" 
                variant="secondary" onClick={handleShow} block>View chart
            </Button>
            <Modal show={show} onHide={handleClose} centered border="primary" size={country === 'Global' ? 'lg' : ''} >
              <Modal.Body>
                { country === 'Global' ? <LineChart /> : <BarChart cases={globalData} country={country} /> }
              </Modal.Body>
            </Modal>
          </Col>
        </Row>

        <Row>
          <Col md={8} className="Card"> 
            <Map center={mapCenter} zoom={mapZoom} casesInfo={globalData} countryName={country}  />
          </Col>
          <Col md={4} xs={12}>
              
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Home;
