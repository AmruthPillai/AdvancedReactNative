import { AsyncStorage } from 'react-native'
import * as Facebook from 'expo-facebook';

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from '../Constants'

export const facebookLogin = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token')

  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
  } else {
    await doFacebookLogin(dispatch)
  }
}

const doFacebookLogin = async dispatch => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync('318033309072913', {
    permissions: ['public_profile']
  })

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL })
  }

  await AsyncStorage.setItem('fb_token', token)
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
}