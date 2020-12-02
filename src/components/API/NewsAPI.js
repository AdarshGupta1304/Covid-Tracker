// Fetching data from gnews.icon

const KEY = '2b5f6b6f7c5806833005987f4214cfa2';
const q = 'corona';
const lang = 'en';

// const baseUrl = 'https://gnews.io/api/v4/search?q=corona&token=2b5f6b6f7c5806833005987f4214cfa2';
const baseUrl2 = 'https://gnews.io/api/v4/top-headlines?q=covid19&lang=en&token=2b5f6b6f7c5806833005987f4214cfa2';

export const data = fetch(baseUrl2)
                    .then(data => data.json())
                    .then(data => data)
                    .catch(err => console.log("err while fetching data from gnews api : - ",err));























// Fetching data from newsapi.org  

// const proxyUrl = "https://cors-anywhere.herokuapp.com/"
// const q = "corona";
// const apiKey = "7d3520f881974c4ca22977f4f29f5cfa";
// const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?q=${q}&language=en&apiKey=${apiKey}`;
// const response = new Request(url);

// export const data = fetch(response)
//                               .then(response => response.json())
//                               .then((news) => {
//                                 return news;
//                                 // console.log(news);
//                               })
//                               .catch(error => {
//                                 console.log(error);
//                               });















  // import axios from 'axios';
// const NewsAPI = require('newsapi');



// newsapi.org

// const newsAPI = '7d3520f881974c4ca22977f4f29f5cfa';

// const baseUrl = 'https://newsapi.org/v2/everything?q="cororna"&apiKey=7d3520f881974c4ca22977f4f29f5cfa';

// const baseUrl ='https://newsapi.org/v2/everything';



// const newsapi = new NewsAPI('7d3520f881974c4ca22977f4f29f5cfa');
// // To query /v2/top-headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// export const response = newsapi.v2.topHeadlines({
// //   sources: 'bbc-news,the-verge',
//   q: 'corona',
//   category: 'health',
//   language: 'en',
//   country: 'in'
// })

// console.log(response);
