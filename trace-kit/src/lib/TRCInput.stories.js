import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, text, boolean, number } from '@storybook/addon-knobs/react'

import TRCInput from './TRCInput'

export default {
	component: TRCInput,
	title: 'TRCInput',
	decorators: [withKnobs],
	// Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
}

export const actionsData = {
    onFocus: action('onFocus'),
    onBlur: action('onBlur'),
    onKeyDown: action('onKeyDown'),
    onChange: action('onChange'),
}

export const Default = () => {
    return (
        <TRCInput
			{...actionsData}

            id={text('id', '')}
            className={text('Classname', '')}
            type={text('Type', 'select')}
            value={text('Value', 'Option 2')}
            placeholder={text('Placeholder', '')}
			disabled={boolean('Disabled', false)}
			autoFocus={boolean('AutoFocus', false)}
			error={text('Error', '')}
			options={object('Options', ["Option 1", "Option 2", "Option 3"])}
		/> 
    )
}

export const Select = () => {
    return (
        <TRCInput
            {...actionsData}

            id={text('id', '')}
            className={text('Classname', '')}
            type={text('Type', 'select')}
            value={text('Value', 'Option 2')}
            placeholder={text('Placeholder', '')}
			disabled={boolean('Disabled', false)}
			autoFocus={boolean('AutoFocus', false)}
			error={text('Error', '')}
			options={object('Options', ["Option 1", "Option 2", "Option 3"])}
        /> 
    )
}

export const Text = () => {
    return (
        <TRCInput
            {...actionsData}

            id={text('id', '')}
            className={text('Classname', '')}
            type={text('Type', 'text')}
            value={text('Value', 'Option 2')}
            placeholder={text('Placeholder', '')}
			disabled={boolean('Disabled', false)}
			autoFocus={boolean('AutoFocus', false)}
			error={text('Error', '')}
        /> 
    )
}

export const TextDate = () => {
    return (
        <TRCInput
            {...actionsData}

            id={text('id', '')}
            className={text('Classname', '')}
            type="date"
            value="2013-10-29"
            placeholder={text('Placeholder', '')}
			disabled={boolean('Disabled', false)}
			autoFocus={boolean('AutoFocus', false)}
			error={text('Error', '')}
        /> 
    )
}

export const TextNumber = () => {
    return (
        <TRCInput
            {...actionsData}

            id={text('id', '')}
            className={text('Classname', '')}
            type="text"
            value="34"
            placeholder={text('Placeholder', '')}
			disabled={boolean('Disabled', false)}
			autoFocus={boolean('AutoFocus', false)}
			error={text('Error', '')}
			options={object('Options', ["Option 1", "Option 2", "Option 3"])}
        /> 
    )
}
