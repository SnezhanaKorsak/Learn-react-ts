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
import {Select} from "./components/Select";

export type ItemsType = {
    id: number
    title: string
}

function App() {
    let [ratingValue, setRatingValue] = useState<ValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    let [on, setOn] = useState(false)

    let [value, setValue] = useState(0)

    const items = [
        {id: 0, title: 'None'},
        {id: 1, title: 'January'},
        {id: 2, title: 'March'},
        {id: 3, title: 'April'},
        {id: 4, title: 'May'},
        {id: 5, title: 'June'},
    ]

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

            {/*<Accordion title={"Users"} collapsed={collapsed} onChange={onChangeHandler} items={items}/>*/}
            <Select value={value} items={items}  onChange={setValue}/>



        </div>
    );
}

export default App;



