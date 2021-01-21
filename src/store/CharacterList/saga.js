import { put, select, takeEvery } from 'redux-saga/effects';
import formActionCreators, { SAVE_PLAYER_LIST, GET_PLAYER_LIST, VALIDATE_TEAM } from './action';
import * as data from '../../players.json'


export function* getPlayerList() { 
  try {
      //const endpoint = endpoints.getCharacterName
      //const response = yield call(fetch, endpoint);
    yield put({ type: SAVE_PLAYER_LIST, payload: data });

  } catch(e) {
    console.log(e)
  }
}

export function* validateTeam({player, actionType}) {
  const state = yield select()
  const teamList = state.getPlayerListReducer.team
  try {
    if(actionType === 'ADD') {
      if(teamList.length === 7) {
        yield put(formActionCreators.setError('team length is maximum'))
        return
      }
      const playerExists = teamList.some(teamPlayer => player.id === teamPlayer.id)
      if(playerExists) {
        yield put(formActionCreators.setError('player is already added'))
        return
      }
      const reducer = (accumulator, currentValue) => parseInt(currentValue.points) + accumulator;

      const teamPoint = teamList.reduce(reducer, 0) 
      if(teamPoint > 75 ) {
        yield put(formActionCreators.setError('team value can not be greater than 75'))
        return

      }
      let batsmanCount = 0 
      let bowlerCount = 0
      let allRounderCount = 0
      let noError = true
      for(let i=0; i < teamList.length; i++){
        switch(teamList[i].role) {
          case 'Batsman':
            if(batsmanCount < 3){
              batsmanCount++
            }
          break;
          case 'Bowler': 
          if(bowlerCount < 2){
            bowlerCount++
          }
          break;
          case 'All-Rounder':
            if(allRounderCount < 2){
              allRounderCount++
            }
          break;
        }
        console.log("bowlerCount", bowlerCount)
        if((batsmanCount === 3 && player.role === 'Batsman') || (bowlerCount === 2 && player.role === 'Bowler') || (allRounderCount === 2 && player.role === 'All-Rounder')){
          noError = false
          yield put(formActionCreators.setError(`${player.role} length is maximum`))
          break
        }
      }
      if(noError) {
        yield put(formActionCreators.createTeam(player, actionType))
        yield put(formActionCreators.setError(''))
      }

    } else {
      yield put(formActionCreators.createTeam(player, actionType))
      yield put(formActionCreators.setError(''))

    }
  } catch(e) {
    console.log(e)
  }
}

export function* loadCharacterList() {
  yield takeEvery(GET_PLAYER_LIST, getPlayerList);
  yield takeEvery(VALIDATE_TEAM, validateTeam);
}

