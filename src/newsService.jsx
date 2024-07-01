import axios from 'axios';

const API_KEY = 'cb4e9eadddab4edf899a6e6ac22a56ba';
const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async (country = 'us') => {
    try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params: {
                country,
                apiKey: API_KEY,
                headers: { 'Upgrade': 'HTTP/2.0' } 
            }
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching the news', error);
        throw error;
    }
};
