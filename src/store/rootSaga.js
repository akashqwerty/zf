import { all } from 'redux-saga/effects';
import {loadCharacterList} from './CharacterList/saga'
export default function* rootSaga() {
    yield all([loadCharacterList()]);
  }