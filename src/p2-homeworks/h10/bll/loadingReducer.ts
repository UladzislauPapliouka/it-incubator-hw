const initState = {
    loading: false
}

export const loadingReducer = (state: typeof initState = initState, action: ReturnType<typeof loadingAC>): any => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, loading: action.payload.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean): { type: "SET_LOADING", payload: { loading: boolean } } => ({
    type: "SET_LOADING",
    payload: {loading}
})