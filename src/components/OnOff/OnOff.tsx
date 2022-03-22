import React, {useState} from 'react';

type PropsType = {
    onOff: boolean
    setOnOff: (onOff: boolean) => void
}

function OnOff(props: PropsType) {
    console.log('OnOff rendering')

    console.log('on: ' + props.onOff)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.onOff ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.onOff ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.onOff ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                !props.onOff && props.setOnOff(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.onOff && props.setOnOff(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
};

export default OnOff;