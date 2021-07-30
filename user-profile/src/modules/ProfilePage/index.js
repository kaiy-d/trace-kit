import React from 'react';
import { useSelector } from 'react-redux'
import { TRCButton } from 'trace-kit'

function ProfilePage() {
    const playlist = useSelector(state => state.profile.value.playlist)
    const title = playlist ? playlist.title : "--"
    const description = playlist ? playlist.description : "--"
    const clips = playlist ? playlist.clips : []

    return (
        <div className="profile-page">
            <h1>{title}</h1>
            <p>{description}</p>

            <div>VIDEO PLAYER HERE</div>
            <div>
                <ul>
                    { clips.map(clip => (
                        <li key={`clip-${clip.utc_time}`}>
                            {clip.title}
                        </li>
                    ))}
                </ul>
            </div>

            <TRCButton>Claim This Page</TRCButton>
        </div>
    )
}

export default ProfilePage
