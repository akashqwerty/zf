export const SAVE_PLAYER_LIST = 'web/savePayerList'
export const GET_PLAYER_LIST = 'web/getPlayerList'
export const ADD_TO_TEAM = 'web/addToTeam'
export const VALIDATE_TEAM = 'web/validateTeam'
// export const GET_TEAM_LIST = 'web/getTeamList'
export const SET_VALIDATION_ERROR = 'web/serValidationError'
// can be moved in one object

//  
const formActionCreators = {
  getPlayerList: () => {
    return {
      type: GET_PLAYER_LIST
    }
  },
  createTeam: (player, actionType) => {
    return {
      type: ADD_TO_TEAM,
      player,
      actionType
    }
  },
  validateTeam: (player, actionType) => {
    return {
      type: VALIDATE_TEAM,
      player,
      actionType
    }
  },
  // getMyTeam: () => {
  //   return {
  //     type: GET_TEAM_LIST
  //   }
  // },
  setError: (msg) => {
    return {
      type: SET_VALIDATION_ERROR,
      msg
    }
  }
}
export default formActionCreators
