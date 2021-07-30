import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'

import './ClipListTitle.css'

export default function ClipListTitle({ utcTime, homeScore, awayScore, awayTitle }) {
    let date = moment(utcTime).format('dddd, MMMM Do YYYY')
    let outcome = 'tie'
    if (homeScore > awayScore) {
        outcome = 'win'
    }
    if (homeScore > awayScore) {
        outcome = 'loss'
    }

    return (
        <div className="clip-list-title">
            { date } { homeScore } to { awayScore } { outcome } { awayTitle && (<span>vs { awayTitle }</span>)}
        </div>
    )
}

ClipListTitle.propTypes = {
	utcTime: PropTypes.number.isRequired,
	homeScore: PropTypes.number.isRequired,
	awayScore: PropTypes.number.isRequired,
    awayTitle: PropTypes.string,
};
