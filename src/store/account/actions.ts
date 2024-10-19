import { Dispatch } from "redux"
import {
  AccountActionTypes,
  LOG_OUT,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./types"
import { userService } from "../../services"
import { history } from "../../helpers"

export const login = (email: string, password: string, from: string) => {
  return (dispatch: React.Dispatch<AccountActionTypes>) => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        email: email,
        password: password,
      },
    })

    userService.login(email, password).then(
      (res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res,
        })
        history.push(from)
      },
      (error) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: { error: error.toString() },
        })
      }
    )
  }
}

export const logout = (): AccountActionTypes => {
  return { type: LOG_OUT }
}
