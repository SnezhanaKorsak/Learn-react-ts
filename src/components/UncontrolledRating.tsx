import React, {useState} from "react";
import {Star} from "./Star";

export type ValueType = 0 | 1 | 2 | 3 | 4| 5
type RatingPropsType = {
   /* value: ValueType*/
}
export function UncontrolledRating(props: RatingPropsType ) {
    let [value, setValue] = useState<ValueType>(0)

    const onClickStar = (value:ValueType) => {
        setValue(value)
    }

    return <div>
        <Star selected={value > 0} onClickStar={() => onClickStar(1)}/>
        <Star selected={value > 1} onClickStar={() => onClickStar(2)}/>
        <Star selected={value > 2} onClickStar={() => onClickStar(3)}/>
        <Star selected={value > 3} onClickStar={() => onClickStar(4)}/>
        <Star selected={value > 4} onClickStar={() => onClickStar(5)}/>
    </div>
}