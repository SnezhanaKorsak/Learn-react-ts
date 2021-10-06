import React, {useState} from "react";
import {Star} from "./Star";

export type ValueType = 0 | 1 | 2 | 3 | 4| 5
type RatingPropsType = {
   /* value: ValueType*/
}
export function UncontrolledRating(props: RatingPropsType ) {
    let [value, setValue] = useState<ValueType>(0)


    return <div>
        <Star selected={value > 0} onClick={setValue} value={1}/>
        <Star selected={value > 1} onClick={setValue} value={2}/>
        <Star selected={value > 2} onClick={setValue} value={3}/>
        <Star selected={value > 3} onClick={setValue} value={4}/>
        <Star selected={value > 4} onClick={setValue} value={5}/>
    </div>
}