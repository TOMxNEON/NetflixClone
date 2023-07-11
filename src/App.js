import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/Posters/RowPost';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Banner/>
            <RowPost/>

        </div>
    );
}

export default App;
