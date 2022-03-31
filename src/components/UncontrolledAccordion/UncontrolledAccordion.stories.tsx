import React, {useState} from 'react';
import {UncontrolledAccordion} from './UncontrolledAccordion';


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <UncontrolledAccordion titleValue={'Users'}/>
}