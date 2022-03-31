import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args = {
    titleValue: 'Menu',
    accordionCollapsed: true,
    setAccordionCollapsed: callback,
}


export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} accordionCollapsed={true}
                                              setAccordionCollapsed={callback}/>;
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} accordionCollapsed={false}
                                                     setAccordionCollapsed={callback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} accordionCollapsed={value} setAccordionCollapsed={() => setValue(!value)}/>
}