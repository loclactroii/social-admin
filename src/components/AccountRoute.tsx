import React from "react"
import { RouteProps, Outlet, Navigate } from "react-router-dom"
import { AccountState } from "../store/account/types"
import { useSelector } from "react-redux"
import { AppState } from "../store"
import { Login } from "../pages/Account"

export const AccountRoute = ({}: RouteProps): JSX.Element => {
  const account: AccountState = useSelector((state: AppState) => state.account)
  return account.token ? <Navigate to="/admin/home" /> : <Login />
}
