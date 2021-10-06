import React from "react";
import {ValueType} from "./UncontrolledRating";


type StarPropsType = {
    selected: boolean
    value: ValueType
    onClick: (value: ValueType) => void
}

export function Star(props: StarPropsType) {
    return (
        <span onClick={() => {props.onClick(props.value)}}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )

}