import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
}
export function Accordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)

    const toggleHandler = () => {setCollapsed(!collapsed)}
    return (
        <div>
            <AccordionTitle title={props.title} toggleHandler={toggleHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>

    )
}