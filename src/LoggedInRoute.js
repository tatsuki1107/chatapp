import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "./AuthService"

const LoggedInRoute = ({ component: Component, ...rest }) => {
    const user = useContext(AuthContext)

    return (
        <Route
            {...rest}
            component={
                // ログインしていればcomponentを描写
                // ログインしていなければ、"/Login"にリダイレクト
                (Props) =>
                    user ? (
                        <Component {...Props} />
                    ) : (
                        <Redirect to={"/Login"} />
                    )

            }
        />



    )
}

export default LoggedInRoute
