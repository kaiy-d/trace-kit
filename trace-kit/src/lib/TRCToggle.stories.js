import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, text, boolean, number } from '@storybook/addon-knobs/react'

import TRCToggle from './TRCToggle'

export default {
	component: TRCToggle,
	title: 'TRCToggle',
	decorators: [withKnobs],
	// Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
}

export const actionsData = {
    onToggle: action('onToggle'),
}

export const Default = () => {
    return (
        <TRCToggle
			{...actionsData}
            checked={boolean('Checked', '')}
		/> 
    )
}
