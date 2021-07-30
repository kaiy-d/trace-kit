import React from 'react'
import { action } from '@storybook/addon-actions'

import ClipListTitle from './ClipListTitle'

export default {
	component: ClipListTitle,
	title: 'Clip List Title',
	// Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
}

export const clipData = {
	utcTime: 1578161195000,
	homeScore: 5,
	awayScore: 3,
	awayTitle: "Trace United FC G08 FA Kurti"
}

export const actionsData = {
}

export const Default = () => {
    return (
        <ClipListTitle 
            { ...clipData }
        />
	)
}

export const NoTitle = () => {
	let data = Object.assign({}, clipData, { awayTitle: null})
	return (
		<ClipListTitle 
			{...data}
		/>
	)
}

