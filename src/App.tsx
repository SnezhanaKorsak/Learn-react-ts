import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff";
import {UncontrolledRating, ValueType} from "./components/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff";
import {UncontrolledInput} from "./components/UncontrolledInput";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/ControlledInput";




function App() {
    let [ratingValue, setRatingValue] = useState<ValueType>(0)
    const [collapsed, setCollapsed] = useState(false)
    const [on, setOn] = useState(false)

    const onChangeHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className="App">

            {/*<UncontrolledInput/>*/}
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>

          {/*  <UncontrolledOnOff/>*/}
            <OnOff on={on} setOn={setOn}/>

            {/*<UncontrolledRating/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<UncontrolledAccordion title={"Menu"}/>
            <UncontrolledAccordion title={"Users"}/>*/}

            <Accordion title={"Menu"} collapsed={collapsed} onChange={onChangeHandler}/>
            <Accordion title={"Users"} collapsed={collapsed} onChange={onChangeHandler}/>


        </div>
    );
}

export default App;



