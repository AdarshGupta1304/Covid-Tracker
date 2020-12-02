import React, { useState,useEffect } from 'react';
import { data as response } from '../API/NewsAPI';
import Card from 'react-bootstrap/Card';
import NewsCard from './NewsCard';
import './NewsCard.css';

const NewsCards = () => {

    const [newsData,setNewsData] = useState([]);

    useEffect(() => {
        console.log(response);
        if(response !== undefined){
            response.then( APIdata => setNewsData(APIdata.articles) );
            console.log('news data has been set in cards!');
        }

    },[]);


    return(
        <section className="news-area">
            <Card>
                <Card.Header>Covid-19 NEWS</Card.Header>
                {
                    newsData.map( (value,index) => {
                        return(
                            <NewsCard newsInfo={value} key={index} />
                        );
                    })
                }
            </Card>
        </section>
    );


}

export default NewsCards;
