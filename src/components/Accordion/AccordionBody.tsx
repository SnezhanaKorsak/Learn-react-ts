import React from "react";
import {ItemsType} from "../../App";

type AccordionBodyType = {
    items: ItemsType[]
    callBack: (id: number) => void
}

export function AccordionBody(props: AccordionBodyType) {
    const onClickHandler = (id: number) => {
        props.callBack(id)
    }

    return (
        <div>
            <ul>
                {props.items.map(m => <li key={m.id} onClick={()=>onClickHandler(m.id)}>{m.title}</li>)}
            </ul>
        </div>

    )
}