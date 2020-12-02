import React from 'react';
import './NewsCard.css';
import Moment from 'react-moment';

import Card from 'react-bootstrap/Card';

const NewsCard = ({ newsInfo }) => {



    return(
        <Card className="my-2 border-bottom border-dark">
            <Card.Img variant="top" src={newsInfo.image} />
            <Card.Body>
                <Card.Title>{newsInfo.title}</Card.Title>
                <Card.Text>
                    {/* <p>{newsInfo.source.name}</p> */}
                    <Moment format="DD-MMM-yyyy">{newsInfo.publishedAt}</Moment>
                </Card.Text>
                {/* <span style={{fontSize: 'small', display: 'block', }}>{newsInfo.title}</span> */}
                <a href={newsInfo.url} target="_blank">Read More...</a>
            </Card.Body>
        </Card>
        
    );
    
}

export default NewsCard;