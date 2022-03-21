import React, {useState} from 'react';

type RatingPropsType = {}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')

    let [value, setValue] = useState(0)


    return (
        <div>
            <Star selected={value > 0} callback={()=>setValue(1)}/>
            {/*<button value={1} onClick={() => setValue(1)}>1</button>*/}
            <Star selected={value > 1} callback={()=>setValue(2)}/>
            {/*<button value={2} onClick={() => setValue(2)}>2</button>*/}
            <Star selected={value > 2} callback={()=>setValue(3)}/>
            {/*<button value={3} onClick={() => setValue(3)}>3</button>*/}
            <Star selected={value > 3} callback={()=>setValue(4)}/>
            {/*<button value={4} onClick={() => setValue(4)}>4</button>*/}
            <Star selected={value > 4} callback={()=>setValue(5)}/>
            {/*<button value={5} onClick={() => setValue(5)}>5</button>*/}
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    callback: () => void

}

const Star = (props: StarPropsType) => (props.selected) ? (<span onClick={props.callback}><b>star </b></span>) : (
    <span onClick={props.callback}>star </span>);
console.log('Star rendering')

/*    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }

    return <span><b>star</b> </span>
} */