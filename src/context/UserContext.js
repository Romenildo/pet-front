import { createContext } from "react";
import useAuth from "../hooks/useAuth";


const Context = createContext()

function UserProvider({children}){

    const {register} = useAuth()

    return (
        //quando eu tiver acesso ao contexto eu posso acessar os componentes de dentro
        <Context.Provider value={{ register}}>
            {children}
        </Context.Provider>
    )
}

export {Context, UserProvider}