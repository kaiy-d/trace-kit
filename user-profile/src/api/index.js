/*
  Data management to Server via Axios API call
  - getClipData: get data from backend
  There will be a lot of extra methods like deleteBubble, etc
*/

import axios from 'axios'

const getClipData = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`https://apkzbbs5q8.execute-api.us-east-1.amazonaws.com/default/tracebot-playlist-api?playlist_id=1`)
            .then((result) => {
                resolve(result.data)
            })
    })
}

export default getClipData