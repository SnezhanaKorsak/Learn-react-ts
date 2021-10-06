import React from "react";

type AccordionTitleType = {
    title: string
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitleType) {
    return (
        <div>
            <h3 onClick={props.onChange}>
                {props.title}
            </h3>
        </div>

    )
}