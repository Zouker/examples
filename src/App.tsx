import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import UncontrolledOnOff from './components/OnOff/UncontrolledOnOff';
import OnOff from './components/OnOff/OnOff';

/*function sum(a: number, b: number) {
    alert(a + b)
}

sum(23, 12);
sum(100, 300);*/

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
            <Accordion titleValue={'Menu'}
                       accordionCollapsed={accordionCollapsed}
                       setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <Accordion titleValue={'Users'}
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

            <UncontrolledRating/>
            <UncontrolledRating/>
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            <OnOff switchOn={switchOn} setSwitchOn={setSwitchOn}/>
            <OnOff switchOn={switchOn} setSwitchOn={setSwitchOn}/>


            {/*         {toggle && <div className={s.switch}>
                <input type="checkbox" checked={props.switch}/>
                <label><i></i></label>
                <button className={s.greenButton} onClick={() => setToggle(state => !state)}></button>
            </div>}
            {!toggle &&  <div className={s.switch}>
                <label>
                    <input type="checkbox" checked={props.switch}/>
                    <i></i></label>
                <button className={s.redButton} onClick={() => setToggle(!toggle)}></button>
            </div>} */}

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
