import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';

const GetCategoryObj = (categoryName: 'Colors' | 'Events' | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Colors')
        },
        onChange: {
            ...GetCategoryObj('Events')
        },
        onClick: {
            ...GetCategoryObj('Events')
        },
        items: {...GetCategoryObj('Main')},
        accordionCollapsed: {...GetCategoryObj('Main')},
        titleValue: {...GetCategoryObj('Main')},
    }
};

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
const callbacksProps = {
    setAccordionCollapsed: callback,
    onClick: callback
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    accordionCollapsed: true,
    items: [],
}

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    accordionCollapsed: true,
    items: [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}
    ]
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} accordionCollapsed={value} setAccordionCollapsed={() => setValue(!value)}/>
}

ModeChanging.args = {
    titleValue: 'Users',

    items: [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}
    ],
    onClick: (value) => {
        alert(`user with ID ${value} should be happy`)
    }
}