import React from "react"
import { RouteProps, Outlet, Navigate } from "react-router-dom"
import { AccountState } from "../store/account/types"
import { useSelector } from "react-redux"
import { AppState } from "../store"

export const PrivateRoute = ({
  children,
  ...rest
}: RouteProps): JSX.Element => {
  const account: AccountState = useSelector((state: AppState) => state.account)
  return account.token ? <Outlet /> : <Navigate to="/login" />
}
