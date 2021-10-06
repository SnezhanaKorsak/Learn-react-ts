import React from "react";

type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        margin: '5px',
        lineHeight: '20px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        margin: '5px',
        lineHeight: '20px',
        backgroundColor: !props.on ? 'red' : 'white'
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const changeSetOn = () => {
        props.setOn(!props.on)
    }

    return (
        <div>
            <div style={onStyle} onClick={changeSetOn}>On</div>
            <div style={offStyle} onClick={changeSetOn}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )
}