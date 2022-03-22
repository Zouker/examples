import React from 'react';

type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    setAccordionCollapsed: () => void
}

/*function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    }
}*/

/*function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue}/>
        {props.collapsed === false && <AccordionBody/>}
    </div>
}*/

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    const fun = () => alert('hey')
    return <div>
        <AccordionTitle collapsed={props.accordionCollapsed} title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed}/>
        {!props.accordionCollapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => props.setAccordionCollapsed()}>-- {props.title} --</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;