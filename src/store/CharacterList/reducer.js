import { SAVE_PLAYER_LIST, ADD_TO_TEAM, SET_VALIDATION_ERROR } from './action'

const initialState = {
    playerList : [],
    team: [],
    error: ''
}
export default function getPlayerListReducer (state = initialState, action) {
    switch (action && action.type) {
        case SAVE_PLAYER_LIST: 
        return {
            ...state,
            playerList: action.payload
        }
        case ADD_TO_TEAM:
           if(action.actionType === 'ADD') {
               const obj = {
                   id: action.player.id,
                   points: action.player.points,
                   role: action.player.role
               }
                return {
                    ...state,
                    team: [...state.team, obj]
                }
            } else {
                const team = state.team
                const filteredTeam = team.filter(elem => elem.id !== action.player.id)
                return {
                    ...state,
                    team: filteredTeam
                }
            }
        // case GET_TEAM_LIST: 
        //     let myTeam = []
        //     const teamIds = state.team
        //     for(let i=0; i < teamIds.length; i++) {
        //         const findPlayer = state.playerList.find(player => player.id === teamIds[i])
        //         myTeam = [...myTeam, findPlayer]
        //     }
        // return myTeam
        case SET_VALIDATION_ERROR: 
        return {
            ...state,
            error: action.msg
        }
        default:
            return state

    }
}