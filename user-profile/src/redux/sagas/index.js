import { all, takeLatest, put, call } from 'redux-saga/effects'
import getClipData from '../../api'
import * as types from '../constants'

function* getClips() {
    try {
        const response = yield call(getClipData)
        if (response.success) {
            yield put({ type: types.GET_CLIPS_SUCCESS, clips: response.data.clips })
        }
    } catch (error) {
        yield put({ type: types.GET_CLIPS_FAILED, error })
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(types.GET_CLIPS, getClips),
    ])
}