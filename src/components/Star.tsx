import React from "react";
import {ValueType} from "./UncontrolledRating";


type StarPropsType = {
    selected: boolean
    onClickStar ?: () => void
}
export function Star(props: StarPropsType) {
    return (
        <span onClick={props.onClickStar}>{ props.selected ? <span><b>star </b></span> : <span>star </span>} </span>
    )

}