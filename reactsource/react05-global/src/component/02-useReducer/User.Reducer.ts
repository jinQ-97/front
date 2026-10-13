import { type UserType , type UserAction, initUser } from "../01-usestate/user.types";



export function userReducer(user:UserType,action:UserAction) {
    switch (action.type) {
        case "SET_NAME":
            return{
            ...user,
            username: action.name.trim().toLowerCase(),
        }
        case "SET_YEAR":
            const age = new Date().getFullYear() - action.year;
            return{
            ...user,
            year: action.year,
            warning: action.year !== 0 && age < 18 ? "18세 이상이어야 합니다" : "",
        }
        case "RESET":
            return initUser

        default:
            return user
    }
}