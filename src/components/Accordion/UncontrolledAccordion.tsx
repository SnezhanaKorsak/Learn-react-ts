import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


type AccordionPropsType = {
    title: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    /*const [collapsed, setCollapsed] = useState(false)*/
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    const collapsedHandler = () => {dispatch({type: TOGGLE_COLLAPSED})}

    return (
        <div>

            <AccordionTitle title={props.title} onClick={collapsedHandler}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTitleType = {
    title: string
    onClick: () => void
}

const AccordionTitle = React.memo((props: AccordionTitleType) => {
    return (
        <div>
            <h3 onClick={props.onClick}>
                {props.title}
            </h3>
        </div>
    )
})

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
