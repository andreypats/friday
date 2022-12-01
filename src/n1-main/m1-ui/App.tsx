import React from 'react';
import {Header} from './header/Header';
import {PagesRoutes} from './routes/PagesRoutes';


function App() {
    return (
        <div className="App">
            <Header/>
            <PagesRoutes/>
        </div>
    );
}

export default App;
