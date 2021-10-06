import React, {useState} from "react";

type OnOffPropsType = {
   /* on : boolean*/
}

export function OnOff( props: OnOffPropsType) {
    const [on, setOn] = useState(false)
    const buttonStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        margin: '5px',
        lineHeight: '20px',
    }

    const OnStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        margin: '5px',
        lineHeight: '20px',
        backgroundColor: on ? 'green' : 'white'
    }
    const OffStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        margin: '5px',
        lineHeight: '20px',
        backgroundColor: !on ? 'red' : 'white'
    }

    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
       backgroundColor: on ? 'green' : 'red'
    }



    const changeSetOn = () => {
        setOn(!on)
    }

  return (
      <div>
            <div style={OnStyle} onClick={changeSetOn}>On</div>
            <div style={OffStyle} onClick={changeSetOn}>Off</div>
            <div style={indicatorStyle}/>
      </div>
  )
}