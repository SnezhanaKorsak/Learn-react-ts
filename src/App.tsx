import React from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff";
import {UncontrolledRating} from "./components/UncontrolledRating";


function App() {
    return (
        <div className="App">
            <OnOff/>

            <UncontrolledRating/>
            <Rating value={3}/>

            <Accordion title={"Menu"}/>
            <Accordion title={"Users"}/>
        </div>
    );
}

export default App;



