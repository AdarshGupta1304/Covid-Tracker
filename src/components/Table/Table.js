import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './Table.css';

const CountryTable = (props) => {

    const data = props.countryInfo;
    console.log('countryTable props is : ',data);
    // console.log(Array.isArray(data));

    const [countryData,setCountryData] = useState([]);

    useEffect(() => {

        const data = props.countryInfo;
        // console.log('countryInfo is : ',data);
        // console.log(Array.isArray(data));
        setCountryData(data);
    });

    return(
        <section className="Table-area my-4" size="sm">
            <h3 className="text-muted font-italic">Cases By Countries</h3>
            <Table striped bordered hover size="sm">
                <thead className="my-3">
                    <tr>
                        <th>S.No</th>
                        <th>Country</th>
                        <th>Cases</th>
                    </tr>
                </thead>

                <tbody>
                {
                    countryData.map( (value,index) => {
                        return(
                            <tr key={index+1} >
                                <th>{index+1}</th>
                                <th>
                                    <span>
                                        <img src={value.countryInfo.flag} alt='Flag' 
                                            className="flags"
                                        />
                                    </span>
                                {value.country}</th>
                                <th>{value.cases}</th>
                            </tr>
                        );
                    } )
                }
                </tbody>
            </Table>
        </section>
    );
}

export default CountryTable;