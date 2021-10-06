import React from "react";

type AccordionTitleType = {
    title: string
    toggleHandler: () => void
}

export function AccordionTitle(props: AccordionTitleType) {
    return (
        <div>
            <h3 onClick={props.toggleHandler}>
                {props.title}
            </h3>
        </div>

    )
}