import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import Input from "../../form/Input"

import styles from "../../form/Form.module.css"

//context
import { Context } from "../../../context/UserContext"

function Login(){
    const [user, setUser] = useState({})
    const {login} = useContext(Context)

    function handleChange(event){
        setUser({ ...user , [event.target.name]:event.target.value})
                            //      nome       :     jose
    }

    function handleSubmit(event){
        event.preventDefault()//pagina nao recarregar ao clicar no submit

        //enviar para o banco
        login(user)
    }

    return (
        <section className={styles.form_container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <Input
                 text="E-mail"
                 type="email"
                 name="email"
                 placeholder="Digite o seu E-mail"
                 handleOnChance={handleChange}
                />

                <Input
                 text="Senha"
                 type="password"
                 name="password"
                 placeholder="Digite o sua Senha"
                 handleOnChance={handleChange}
                />

                <input type="submit" value="Login"></input>
            </form>
            <p>
                Não tem conta? <Link to="/register">Clique aqui.</Link>
            </p>
        </section>
    )
}

export default Login