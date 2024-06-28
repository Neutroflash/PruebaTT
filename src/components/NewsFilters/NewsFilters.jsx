import React, { useState } from 'react';

const NewsFilters = ({ onSearch, onFilter }) => {
    const [keyword, setKeyword] = useState('');
    const [country, setCountry] = useState('us');
    const [searchByFoundWord, setSearchByFoundWord] = useState(false);

    const handleSearch = () => {
        onSearch(keyword, searchByFoundWord);
    };

    const handleFilter = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        onFilter(selectedCountry);
    };

    const handleSearchByFoundWord = (e) => {
        setSearchByFoundWord(e.target.checked);
    };

    return (
        <div className="news-filters">
            <input 
                type="text" 
                placeholder="Search by keyword" 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
            <select value={country} onChange={handleFilter}>
                <option value="us">USA</option>
                <option value="ca">Canada</option>
                <option value="gb">UK</option>
                <option value="au">Australia</option>
                <option value="in">India</option>
            </select>
        </div>
    );
};

export default NewsFilters;