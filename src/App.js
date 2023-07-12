import React from 'react';
import './App.css';
import { originals,action,top_rated} from './urls'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/Posters/RowPost';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Banner/>
            <RowPost url={originals} title='Netflix Originals'/>
            <RowPost url={action} title='Action' isSmall />
            <RowPost url={top_rated} title='Top' isSmall />

        </div>
    );
}

export default App;
