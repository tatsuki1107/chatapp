import React, { useState, useEffect } from "react"
import firebase from "/config/Firebase"

const AuthContext = React.createContext()

// Provider => コンテキストで渡したい値を指定するもの
const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null)
    // todo: 認証済みユーザーを取得して、userに格納する処理

    //* useEffect
    //* DOMの操作 => レンダリングが終わらないとDOMが操作できないので、操作しようがない
    //* 外部APIとの通信 => レンダリングとは関係ない

    useEffect(() => {
        firebase.auth().onAuthStateChanged(SetUser)
    }, [])



    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )

}

export {
    AuthProvider,
    AuthContext
}