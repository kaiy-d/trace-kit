import React, { useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import * as act from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

function Loader() {
    return (
        <Router>
            <Route path="/" component={LoadDefaultPlaylist} exact />
            <Route path="/athlete/:playlist_id" component={LoadProfile} />
        </Router>
    )
}

export default Loader

function LoadDefaultPlaylist(props) {
	return null
}

function LoadProfile(props) {
	const playlistId = props.match.params.playlist_id
	const profile = useSelector(state => state.profile)
	const dispatch = useDispatch()

	useEffect(() => {
		if (profile.loading) {
			return
		}
		if (profile.complete && profile.value.playlistId === playlistId) {
			return
		}

		dispatch(act.loadProfile(playlistId))
	})

	return null
}
