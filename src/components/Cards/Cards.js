import React from 'react';
import './Cards.css';

import Card from 'react-bootstrap/Card';

import CountUp from 'react-countup';


import { test } from '../../util';

// col-xs-10 col-sm-10 col-md-10 col-lg-2
// let str = `col-xs-8 col-sm-6 col-md-4 col-lg-2 m-3 p-0 shadow ${category}`;
const Cards = ({category,cases,totalCases}) => {

    let str = `m-0 p-0 shadow ${category}`;
    let header = `${category}heading`;
    return(

        <Card className={str} >
            <Card.Header as="h5" className={header}>{category}</Card.Header>
            {/* <div> */}
                <Card.Body as="h5">
                    <span>{test(totalCases)}</span>
                    {/* <CountUp start={0} end={Number(totalCases)} separator="," duration="3.5" /> */}
                </Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    Today's {category} : <br />+
                    <CountUp start={0} end={Number(cases)} separator="," duration="2.5" />
                </Card.Subtitle>
                {/* <Card.Text as="h6">{new Date().toDateString()}</Card.Text> */}
            {/* </div> */}
        </Card>
       
       
        
    );
}

export default Cards;
