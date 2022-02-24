import {getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
import {receiveTweets} from "./tweets";
import {setAutherUser} from "./authedUser";

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, tweets}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAutherUser(AUTHED_ID))
            })
    }
}