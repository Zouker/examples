import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff} from './OnOff';

export default {
    title: 'OnOff',
    component: OnOff,
};

const callback = action('on or off clicked')

export const OnMode = () => <OnOff switchOn={true} setSwitchOn={callback}/>
export const OffMode = () => <OnOff switchOn={false} setSwitchOn={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff switchOn={value} setSwitchOn={setValue}/>
}