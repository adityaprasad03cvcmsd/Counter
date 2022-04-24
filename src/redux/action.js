import {updateCounter,loading} from "./actiontype"

export const updCounter = (payload) => {
    return {
        type: updateCounter,
        payload
    }
}

export const loadingState = (payload) => {
    return {
        type: loading,
        payload
    }
}