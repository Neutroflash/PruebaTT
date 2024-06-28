import React, { useEffect, useState } from 'react';
import NewsFilters from '../NewsFilters/NewsFilters';
import { getTopHeadlines } from '../../newsService';
import './NewList.css';

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [country, setCountry] = useState('us');

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);

            try {
                const articles = await getTopHeadlines(country);
                setNews(articles);
                setFilteredNews(articles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the news', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchNews();
    }, [country]);

    const handleSearch = (keyword, searchByFoundWord) => {
        if (keyword.trim() === '') {
            setFilteredNews(news);
            return;
        }

        const filtered = news.filter(article =>
            article.title.toLowerCase().includes(keyword.toLowerCase()) ||
            (searchByFoundWord && article.description.toLowerCase().includes(keyword.toLowerCase()))
        );

        setFilteredNews(filtered);
    };

    const handleFilter = (selectedCountry) => {
        setCountry(selectedCountry);
    };

    if (loading) {
        return <p>Loading news...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="news-list-container">
            <NewsFilters onSearch={handleSearch} onFilter={handleFilter} />
            <div className="news-list">
                {filteredNews.map((article, index) => (
                    <div key={index} className="news-item">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsList;