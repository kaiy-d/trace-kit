import React from 'react'
import { storiesOf } from '@storybook/react'

import ClipListItemAdd from '../lib/ClipListItemAdd'

storiesOf('ClipListItemAdd', module)
    .add('default', () => (
        <ClipListItemAdd />
    ))