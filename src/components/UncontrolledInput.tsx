import React, {useRef, useState} from "react";

export function UncontrolledInput() {
    let [value, setValue] = useState('')
    let inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <div>
          <input ref={inputRef}/>
          <button onClick={save}>SAVE</button>
            -----current value: {value}
        <hr/>
        </div>
    )
}