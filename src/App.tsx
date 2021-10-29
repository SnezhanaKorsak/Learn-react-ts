import React, {useState} from 'react';
import './App.css';
import {RatingContainer} from "./components/Rating";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff";
import {UncontrolledRating, ValueType} from "./components/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOffContainer} from "./components/OnOff";
import {UncontrolledInput} from "./components/UncontrolledInput";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/ControlledInput";
import {Select} from "./components/Select";
import {Example1} from "./components/ReactMemo";

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
        {id: 2, title: 'February'},
        {id: 3, title: 'March'},
        {id: 4, title: 'April'},
        {id: 5, title: 'May'},
        {id: 6, title: 'June'},
        {id: 7, title: 'Jule'},
        {id: 8, title: 'August'},
        {id: 9, title: 'September'},
        {id: 10, title: 'October'},
        {id: 11, title: 'November'},
        {id: 12, title: 'December'},
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
          <OnOffContainer on={on} setOn={setOn}/>

            {/*<UncontrolledRating/>*/}
            <RatingContainer value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledAccordion title={"Menu"}/>
            <UncontrolledAccordion title={"Users"}/>

            {/*<Accordion title={"Users"} collapsed={collapsed} onChange={onChangeHandler} items={items}/>*/}
            <Select value={value} items={items}  onChange={setValue}/>

            <Example1 />



        </div>
    );
}

export default App;



