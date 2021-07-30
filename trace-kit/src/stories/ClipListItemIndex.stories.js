import React from 'react'
import { storiesOf } from '@storybook/react'

import ClipListItemIndex from '../lib/ClipListItemIndex'

storiesOf('ClipListItemIndex', module)
    .add('default', () => (
        <ClipListItemIndex
            selected={false}
            rowIndex={0}
        />
    ))
    .add('selected', () => (
        <ClipListItemIndex
            selected={true}
        />
    ))