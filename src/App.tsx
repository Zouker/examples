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

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    let [switchOn, setSwitchOn] = useState(false)

    // полезное что-то

    /*const [toggle, setToggle] = useState(false)*/
    // обязана вернуть JSX
    console.log('App rendering')
    return (
        <div className={'App'}>
            {/* <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>*/}
            <Accordion color={'black'} onClick={() => {
            }} items={items1} titleValue={'Menu'}
                       accordionCollapsed={accordionCollapsed}
                       setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <Accordion color={'black'} onClick={() => {
            }} items={items2} titleValue={'Users'}
                       accordionCollapsed={accordionCollapsed}
                       setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>
            {/*            Article 2*/}
            {/*          <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}


            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>

            <UncontrolledRating defaultValue={0} onChange={() => {
            }}/>
            <UncontrolledRating defaultValue={0} onChange={() => {
            }}/>
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            <OnOff switchOn={switchOn} setSwitchOn={setSwitchOn}/>
            <OnOff switchOn={switchOn} setSwitchOn={setSwitchOn}/>

            <hr/>
            <Select value={''} items={items3} onChange={(value) => {
                alert(value)
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
