import React from 'react';
import './Cards.css';

import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import CountUp from 'react-countup';


import { test } from '../../util';


const Cards = ({category,cases,totalCases}) => {
  

    let str = `m-0 p-0 shadow ${category}`;
    let header = `${category}heading`;



    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {totalCases}
        </Tooltip>
      );


    return(

        <Card className={str} >
            <Card.Header as="h5" className={header}>{category}</Card.Header>
            {/* <div> */}
                <Card.Body as="h5">

                    <OverlayTrigger placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}>
                                     <span>{test(totalCases)}</span>
                    </OverlayTrigger>

                    {/* <span>{test(totalCases)}</span> */}
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
