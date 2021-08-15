import React, { useState } from "react"
import firebase from "./config/Firebase"

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const hundleSubmit = e => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                })
                console.log('成功')
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={hundleSubmit}>
                <div>
                    <label htmlFor={'email'}>Name</label>
                    <input
                        name='name'
                        type='name'
                        id='name'
                        placeholder='Name'
                        value={name}
                        onChange={e => {
                            setName(e.target.value)
                        }}
                    />

                </div>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
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
                        name='password'
                        type='password'
                        id='password'
                        placeholder='password'
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div >
    )
}

export default SignUp