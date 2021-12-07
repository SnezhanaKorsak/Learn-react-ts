import React, {useEffect, useState} from "react";
import './Clock.css';

type ClockPropsType = {
    mode: 'analog' | 'digital'
}

const getCorrectTimeFormat = (number: number) => number < 10 ? '0' + number : number

export const Clock: React.FC<ClockPropsType> = ({mode}) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
            // return () => {clearInterval(intervalID)}
            return () => {
                clearInterval(intervalID)
            }
        })
    }, [])

    // const secondsString = getCorrectTimeFormat(date.getSeconds())
    // const minutesString = getCorrectTimeFormat(date.getMinutes())
    // const hoursString = getCorrectTimeFormat(date.getHours())

    let view;
    switch (mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }

    return <>
        {view}
    </>

}

type DigitalClockViewPropsType = {
    date: Date
}

export const DigitalClockView: React.FC<DigitalClockViewPropsType> = ({date}) => {
    return <div style={{marginBottom: '10px'}}>
        <span>{getCorrectTimeFormat(date.getHours())}</span>
        :
        <span>{getCorrectTimeFormat(date.getMinutes())}</span>
        :
        <span>{getCorrectTimeFormat(date.getSeconds())}</span>
    </div>
}

export const AnalogClockView: React.FC<DigitalClockViewPropsType> = ({date}) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return<div className={"clock"}>
        <h3>Clock</h3>
        <div className={"analog-clock"}>
            <div className={"dial seconds"} style={secondsStyle} />
            <div className={"dial minutes"} style={minutesStyle} />
            <div className={"dial hours"} style={hoursStyle} />
        </div>
    </div>
}