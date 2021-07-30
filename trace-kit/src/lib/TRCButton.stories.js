import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, text, boolean, number } from '@storybook/addon-knobs/react'

import TRCButton from './TRCButton'

export default {
	component: TRCButton,
	title: 'TRCButton',
	decorators: [withKnobs],
	// Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
}

export const actionsData = {
    onClick: action('onClick'),
}

export const Default = () => {
    return (
        <TRCButton
			{...actionsData}
			className={text('Class Name', '')}
			secondary={boolean('Secondary', false)}
			ghost={boolean('Ghost', false)}
			whoops={boolean('Danger', false)}
			disabled={boolean('Disabled', false)}
			full={boolean('Full', false)}
		> 
            { text('Content', 'Press Me') }
        </TRCButton>
    )
}

export const Primary = () => {
    return (
        <TRCButton {...actionsData}> 
            { text('Content', 'Primary Button') }
        </TRCButton>
    )
}

export const PrimaryGhost = () => {
    return (
        <TRCButton ghost {...actionsData}> 
            { text('Content', 'Primary Ghost Button') }
        </TRCButton>
    )
}

export const PrimaryDanger = () => {
    return (
        <TRCButton whoops {...actionsData}> 
            { text('Content', 'Primary Danger Button') }
        </TRCButton>
    )
}

export const PrimaryDisabled = () => {
    return (
        <TRCButton disabled {...actionsData}> 
            { text('Content', 'Primary Disabled Button') }
        </TRCButton>
    )
}

export const Secondary = () => {
    return (
        <TRCButton secondary {...actionsData}> 
            { text('Content', 'Secondary Button') }
        </TRCButton>
    )
}

export const SecondaryGhost = () => {
    return (
        <TRCButton secondary ghost {...actionsData}> 
            { text('Content', 'Secondary Ghost Button') }
        </TRCButton>
    )
}

export const SecondaryDanger = () => {
    return (
        <TRCButton secondary whoops {...actionsData}> 
            { text('Content', 'Secondary Danger Button') }
        </TRCButton>
    )
}

export const SecondaryDisabled = () => {
    return (
        <TRCButton secondary disabled {...actionsData}> 
            { text('Content', 'Secondary Disabled Button') }
        </TRCButton>
    )
}


