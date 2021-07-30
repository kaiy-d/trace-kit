import React from 'react'
import { storiesOf } from '@storybook/react'

import ClipListItemTitle from '../lib/ClipListItemTitle'

storiesOf('ClipListItemTitle', module)
    .add('Defalt', () => (
        <ClipListItemTitle 
            title='clip list item title'
        />
    ))