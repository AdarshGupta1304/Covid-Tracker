import axios from 'axios';

const BaseURL = 'https://disease.sh';


export const GlobalDataAPI = async () => {
    
        let global = `${BaseURL}/v3/covid-19/all`;
        let globalData = await axios.get(global);
        // console.log('globalData : ',globalData);
        return globalData;
}

export const GlobalHistoricalAPI =async () => {
    let historyAPI = `${BaseURL}/v3/covid-19/historical/all`;

    let historicalData = await axios.get(historyAPI);
    // console.log(historicalData);
    return historicalData;
}

// Fecthing All Country country Name
export const countriesList = async () => {

        let getCountries = `${BaseURL}/v3/covid-19/countries`;
        let data = await axios.get(getCountries);
        return data.data;
}

// Fetching country specific data from api
export const countrySpecificInfo = async (country) => {

        const countryUrl = `${BaseURL}/v3/covid-19/countries/${country}`;
        let data = await axios.get(countryUrl);
        return data;
}