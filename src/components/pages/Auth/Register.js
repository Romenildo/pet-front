import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import Input from "../../form/Input"

import styles from "../../form/Form.module.css"

//context
import { Context } from "../../../context/UserContext"

function Register(){
    
    const [user, setUser] = useState({})
    const {register} = useContext(Context)

    function handleChange(event){
        setUser({ ...user , [event.target.name]:event.target.value})
                            //      nome       :     jose
    }

    function handleSubmit(event){
        event.preventDefault()//pagina nao recarregar ao clicar no submit

        //enviar para o banco
        register(user)
    }


    return (
        <section className={styles.form_container}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <Input
                 text="Nome"
                 type="text"
                 name="name"
                 placeholder="Digite o seu nome"
                 handleOnChance={handleChange}
                />

                <Input
                 text="Telefone"
                 type="text"
                 name="phone"
                 placeholder="Digite o seu Telefone"
                 handleOnChance={handleChange}
                />

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

                <Input
                 text="Confirmação de senha"
                 type="password"
                 name="confirmPassword"
                 placeholder="Confirme a sua senha"
                 handleOnChance={handleChange}
                />

                <input type="submit" value="Cadastrar"></input>
            </form>

            <p>
                Já tem conta? <Link to="/login">Clique aqui.</Link>
            </p>
        </section>
    )
}

export default Register