import { all, takeLatest } from 'redux-saga/effects';

import { signIn, signUp, setToken } from './auth';
import { Types as AuthTypes } from '../ducks/auth';

export default function* rootSaga() {
  const { SIGN_IN_REQUEST, SIGN_UP_REQUEST } = AuthTypes;
  return yield all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest(SIGN_IN_REQUEST, signIn),
    takeLatest(SIGN_UP_REQUEST, signUp),
  ]);
}
