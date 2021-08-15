import React, { useState, useContext } from "react"
import firebase from "./config/Firebase"
import { AuthContext } from "./AuthService"
import { Redirect } from "react-router"

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const hundleSubmit = e => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/")
            })
            .catch(err => {
                console.log(err)
            })
    }

    // ログインしている場合は、"/"へリダイレクト
    const user = useContext(AuthContext)
    console.log(user)

    if (user) {
        return <Redirect to="/" />
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={hundleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>ログイン</button>
            </form>


        </>
    )
}

export default Login