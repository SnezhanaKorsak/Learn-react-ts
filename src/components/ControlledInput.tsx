import React, {ChangeEvent, useState} from "react";

export function ControlledInput() {
    let [parentValue, setParentValue] = useState('')

    const onchangeHandlerForInput = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <div>
        <input value={parentValue} onChange={onchangeHandlerForInput}/> --- inputValue: {parentValue}
        <hr/>
    </div>
}

export function ControlledCheckbox() {
    let [parentValue, setParentValue] = useState(false)

    const onchangeHandlerForCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <div>
        <input type="checkbox" checked={parentValue} onChange={onchangeHandlerForCheckbox}/>
        <hr/>
    </div>
}

export function ControlledSelect() {
    let [selectValue, setSelectValue] = useState<string | undefined>(undefined)

    const onchangeHandlerForSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }

    return <div>
        <select value={selectValue} onChange={onchangeHandlerForSelect}>
            <option>None</option>
            <option value={1}>Minsk</option>
            <option value={2}>London</option>
            <option value={3}>Moscow</option>
        </select>
        <hr/>
    </div>

}
