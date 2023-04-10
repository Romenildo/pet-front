
//api
import api from "../utils/api";
import useFlashMessage from "./useFlashMessage"

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"


export default function useAuth() {

    const [authenticated, setAuthenticated] = useState(false)
    const {setFlashMessage} = useFlashMessage()
    const history = useHistory()


    //verificar se o usuario ta com o token
    useEffect(()=>{

        const token = localStorage.getItem('token')
        if(token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.stringify(token)}`
            setAuthenticated(true)
        }
    }, [])

    async function register(user){

        let msgText = 'Cadastro realizado com sucesso!'
        let msgType = 'sucess'
        try {
            const data = await api.post('/users/register', user).then((res)=>{
                return res.data
            })
            await authUser(data)

        } catch (error) {
            msgText = error.response.data.message
            msgType = 'error'
        }

        setFlashMessage(msgText, msgType)
    }

    async function authUser(data){

        setAuthenticated(true)
        localStorage.setItem("token", JSON.stringify(data.token))
        history.push('/')
    }

    return { authenticated, register }
}
