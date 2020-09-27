import {SET_ANIMATION_STATE} from './types'


export const setAnimationState = (state) => async(dispatch) => {
    dispatch({
        type: SET_ANIMATION_STATE,
        payload: state
    })
}