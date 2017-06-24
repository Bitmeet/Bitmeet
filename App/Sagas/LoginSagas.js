import { call, put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

// attempts to login
export function * login (api, { username, password }) {
  const loginResponse = yield call(api.login, {username, password})
  console.tron.log(loginResponse)
  if (loginResponse.ok) {
    const jwt = (loginResponse.data && loginResponse.data.token) ? loginResponse.data.token : ''
    yield put(LoginActions.loginSuccess(jwt))
  } else {
    yield put(LoginActions.loginFailure(loginResponse.data && loginResponse.data.message ? loginResponse.data.message : 'WRONG DETAILS'))
  }
}
