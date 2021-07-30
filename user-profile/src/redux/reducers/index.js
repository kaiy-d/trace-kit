const cloneObj = obj => JSON.parse(JSON.stringify(obj))

export default function rootReducer(state = { isLoading: false, playIndex: 0 }, action = null) {

    switch (action.type) {
        case 'GET_CLIPS':
            return { ...state, isLoading: true }
        case 'GET_CLIPS_SUCCESS':
            return { ...state, isLoading: false, clips: action.clips }
        case 'GET_CLIPS_FAILED':
            return { ...state, isLoading: false, error: action.error }

        case 'DELETE_BUBBLE':
            return { ...state, isLoading: true, clips: cloneObj(action.clips) }
        case 'DELETE_BUBBLE_SUCCESS':
            return { ...state, isLoading: false, clips: cloneObj(action.clips) }
        case 'DELETE_BUBBLE_FAILED':
            return { ...state, isLoading: false, error: action.error }

        case 'REORDER_CLIPS':
            return { ...state, clips: action.clipList }

        case 'UPDATE_SELECTED_INDEX':
            return { ...state, playIndex: action.index }

        default:
            return state
    }
}
