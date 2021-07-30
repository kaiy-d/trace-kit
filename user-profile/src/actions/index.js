
function loadingProfile() {
    return {
        type: 'UPDATE',
        key: 'profile',
        loading: true,
        error: null
    }
}

function errorProfile(error) {
    return {
        type: 'UPDATE',
        key: 'profile',
        loading: false,
        complete: false,
        error: error
    }
}

function completedProfile(profile) {
    return {
        type: 'UPDATE',
        key: 'profile',
        loading: false,
        complete: true,
        error: null,
        value: profile,
    }
}

export const loadProfile = playlistId => {
    return (dispatch) => {
        dispatch(loadingProfile())

        const url = `https://apkzbbs5q8.execute-api.us-east-1.amazonaws.com/default/tracebot-playlist-api?playlist_id=${playlistId}`
	
        fetch(url, { mode: 'cors' })
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json.data)
                return json.data
            })
            .then(playlist => {
                console.log('dispatching state', playlist)
                dispatch(completedProfile({
                    playlistId,
                    playlist
                }))
            })
    }
}
