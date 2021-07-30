import * as types from '../constants'

/* action to get clips */
export const fetchClips = () => ({
    type: types.GET_CLIPS
})

export const reorderClips = (clipList) => ({
    type: types.REORDER_CLIPS,
    clipList
})

/* action to remove bubble */
export const deleteBubble = (clips) => ({
    type: types.DELETE_BUBBLE,
    clips
})

/* action to update the current playing index */
export const updatePlayIndex = (index) => ({
    type: types.UPDATE_SELECTED_INDEX,
    index
})
