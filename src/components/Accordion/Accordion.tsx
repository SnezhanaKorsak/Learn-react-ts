import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {ItemsType} from "../../App";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: ItemsType[]
}
export function Accordion(props: AccordionPropsType) {

    const getId = (id: number) => {
        alert(id)
    }

    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} callBack={getId}/>}
        </div>

    )
}