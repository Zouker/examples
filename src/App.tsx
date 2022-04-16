import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {Select} from './components/Select/Select';

let items1 = [
    {title: 'Pizza', value: 1},
    {title: 'Sushi', value: 2},
    {title: 'WOK', value: 3},
]

let items2 = [
    {title: 'Dimych', value: 1},
    {title: 'Valera', value: 2},
    {title: 'Artem', value: 3},
    {title: 'Viktor', value: 4}
]

let items3 = [
    {value: 1, title: 'Minsk'},
    {value: 2, title: 'Moscow'},
    {value: 3, title: 'Kiev'},
]

// function declaration
function App() {
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [accordionCollapsed2, setAccordionCollapsed2] = useState<boolean>(true)
    const [switchOn, setSwitchOn] = useState(false)
    const [select, setSelect] = useState('')

    const ControlledAccordionComponent = React.memo(Accordion)
    const UncontrolledAccordionComponent = React.memo(UncontrolledAccordion)
    const ControlledSwitchComponent = React.memo(OnOff)
    const UncontrolledSwitchComponent = React.memo(UncontrolledOnOff)
    const ControlledRatingComponent = React.memo(Rating)
    const UncontrolledRatingComponent = React.memo(UncontrolledRating)
    const ControlledSelectComponent = React.memo(Select)

    return (
        <div className={'App'}>
            <PageTitle title={'These are APP components:'}/>
            <hr/>
            Controlled Accordion
            <hr/>
            <ControlledAccordionComponent color={'black'} onClick={() => {
            }} items={items1} titleValue={'Menu'}
                       accordionCollapsed={accordionCollapsed}
                       setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <ControlledAccordionComponent color={'black'} onClick={() => {
            }} items={items2} titleValue={'Users'}
                       accordionCollapsed={accordionCollapsed2}
                       setAccordionCollapsed={() => setAccordionCollapsed2(!accordionCollapsed2)}/>
            <hr/>
            Uncontrolled Accordion
            <hr/>
            <UncontrolledAccordionComponent titleValue={'Menu'}/>
            <UncontrolledAccordionComponent titleValue={'Users'}/>
            <hr/>
            Controlled switch
            <hr/>
            <ControlledSwitchComponent switchOn={switchOn} setSwitchOn={setSwitchOn}/>
            <hr/>
            Uncontrolled switch
            <hr/>
            <UncontrolledSwitchComponent onChange={() => false}/>
            <hr/>
            Controlled Rating
            <hr/>
            <ControlledRatingComponent value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            Uncontrolled Rating
            <hr/>
            <UncontrolledRatingComponent/>
            <hr/>
            Controlled Select
            <hr/>
            <ControlledSelectComponent value={select} items={items3} onChange={(value) => {
                setSelect(value)
            }}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
