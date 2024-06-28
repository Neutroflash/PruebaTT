import React, { useState } from 'react';
import './App.css';
import NewList from './components/NewList/NewList';


function App() {
    const [news, setNews] = useState([]);
    return (
        <div className="App">
            <header className="App-header">
                <h1>Prueba TT</h1>
            </header>
            <main>
                <NewList news={news} />
            </main>
        </div>
    );
}

export default App;
