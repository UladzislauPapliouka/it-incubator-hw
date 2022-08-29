type themeType = {
    theme: string
}
const initState: themeType = {
    theme: "some"
};

export const themeReducer = (state = initState, action: changeThemeActionType): themeType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.payload.theme};
        }
        default:
            return state;
    }
};
type changeThemeActionType = {
    type: "CHANGE_THEME",
    payload: {
        theme: string
    }
}
export const changeThemeC = (theme: string): changeThemeActionType => ({
    type: "CHANGE_THEME",
    payload: {theme}
})