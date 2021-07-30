import React from 'react'
import { storiesOf } from '@storybook/react'

import ClipListItemBubble from '../lib/ClipListItemBubble'

storiesOf('ClipListItemBubble', module)
    .add('Defalt', () => {
        return (
            <ClipListItemBubble
                bubble={{
                    name: 'bubble'
                }}
            />
        )
    })