import React, {KeyboardEvent, useEffect, useState} from "react";
import style from "./Select.module.css";
import {ItemsType} from "../App";



type SelectPropsType = {
    value?: number
    items: ItemsType[]
    onChange: (value: any) => void
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.id === props.value)
    const hoveredElementItem = props.items.find(i => i.id === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])
    const changeActive = () => {
        setActive(!active)
    }

    const onItemsClick = (value: any) => {
        props.onChange(value)
        changeActive()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].id === hoveredElementValue) {
                    const pretendetElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendetElement) {
                        props.onChange(pretendetElement.id)
                        return
                    }
                }
            }
            props.onChange(props.items[0].id)
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }

    }


    return <div className={style.select} onKeyUp={onKeyUp} tabIndex={0}>
        <span className={style.main} onClick={changeActive}>{selectedItem && selectedItem.title}</span>
        {
            active &&
            <div className={style.items}>
                {props.items.map(it => <div
                    className={style.item + " " + (hoveredElementItem === it ? style.selected : "")}
                    key={it.id}
                    onClick={() => onItemsClick(it.id)}
                    onMouseEnter={() => {
                        setHoveredElementValue(it.id)
                    }}
                >{it.title}
                </div>)}
            </div>
        }


    </div>

}