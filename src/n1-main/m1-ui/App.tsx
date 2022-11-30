import React from 'react';
import {Header} from './header/Header';
import {Navbar} from './navbar/Navbar';
import {PagesRoutes} from './routes/PagesRoutes';


function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <PagesRoutes/>
        </div>
    );
}

export default App;
