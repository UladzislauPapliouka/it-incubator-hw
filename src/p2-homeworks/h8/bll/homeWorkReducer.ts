import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: homeWorkActions): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state.sort(
                (user1: UserType, user2: UserType) => {
                    if (user1.name > user2.name) {
                        return action.payload === "up" ? 1 : -1;
                    }
                    if (user1.name < user2.name) {
                        return action.payload === "up" ? -1 : 1;
                    }
                    return 0;
                }
            )]
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload)
        }
        default:
            return state
    }
}
type homeWorkActionSort = {
    type: "sort"
    payload: "up" | "down"
}
type homeWorkActionCheck = {
    type: "check"
    payload: number
}
type homeWorkActions = homeWorkActionCheck | homeWorkActionSort