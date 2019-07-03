import {
  FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL
} from '../Constants'

const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: payload }
    case FACEBOOK_LOGIN_FAIL:
      return { token: null }
    default:
      return state
  }
}
