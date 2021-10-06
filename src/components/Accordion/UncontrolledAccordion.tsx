import React, {useState} from "react";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
}
export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)

    const onChangeHandler = () => {setCollapsed(!collapsed)}
    return (
        <div>

            <AccordionTitle1 title={props.title} onChangeHandler={onChangeHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>

    )
}
type AccordionTitleType = {
    title: string
    onChangeHandler: () => void
}

function AccordionTitle1(props: AccordionTitleType) {
    return (
        <div>
            <h3 onClick={props.onChangeHandler}>
                {props.title}
            </h3>
        </div>

    )
}