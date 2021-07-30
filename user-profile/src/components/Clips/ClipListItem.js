/*
    Clip List Item Component
*/

import React from 'react'
import { useDispatch } from 'react-redux'
import { updatePlayIndex } from '../../redux/actions'

import ClipListItemBubbles from './ClipListItemBubbles'
import ClipListItemTitle from './ClipListItemTitle'

import playPNG from '../../assets/img/play.png'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const ClipListItem = ({ clipItem, rowIndex, selected }) => {
    const dispatch = useDispatch()

    // Get bubbles from clip object
    const getNameForTag = () => {
        return clipItem.tags
    }

    // Generate title from clip object
    const generateTitleForClip = () => {
        const temp_date = new Date(clipItem.utc_time)
        let title = ''
        let date = months[temp_date.getMonth()] + ' ' + temp_date.getDay() + ', ' + temp_date.getFullYear()

        title = 'vs. ' + clipItem.meta.away_team.name + ' on ' + date
        
        return title
    }

    // Store current playindex when click play or index button
    const onChangeClip = (index) => e => {
        e.preventDefault()

        dispatch(updatePlayIndex(index))
    }

    return (
        <div className='clip-list-item'>
            <div className='clip-list-item__index-area'>
                {selected ?
                    (
                        <div className='clip-list-item__play-icon-area' onClick={onChangeClip(0)}>
                            <img src={playPNG} className='clip-list-item__play-icon' alt='' />
                        </div>
                    ) : (
                        <span className='clip-list-item__index' onClick={onChangeClip(rowIndex + 1)}>
                            {rowIndex + 1}
                        </span>
                    )
                }
            </div>
            <div className='clip-list-item__area'>
                <div className='clip-list-item_1'>
                    <ClipListItemBubbles
                        bubbles={getNameForTag()}
                        rowIndex={rowIndex}
                    />
                    <div className='clip-list-item__score'>
                        {clipItem.meta.home_team.score > clipItem.meta.away_team.score ? (
                            <span className='clip-list-item__win-score'>
                                { clipItem.meta.home_team.score } : {clipItem.meta.away_team.score}
                            </span>
                        ) : (
                            clipItem.meta.home_team.score === clipItem.meta.away_team.score ? (
                                <span className='clip-list-item__draw-score'>
                                    { clipItem.meta.home_team.score } : {clipItem.meta.away_team.score}
                                </span>
                            ) : (
                                <span className='clip-list-item__loss-score'>
                                    { clipItem.meta.home_team.score } : {clipItem.meta.away_team.score}
                                </span>
                            )
                        )}
                    </div>
                </div>
                {selected ? 
                    (
                        <ClipListItemTitle
                            title={generateTitleForClip()}
                        />
                    ) : (
                        null
                    )
                }
            </div>
        </div>
    )
}

export default ClipListItem