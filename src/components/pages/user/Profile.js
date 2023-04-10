import api from "../../../utils/api"
import { useState, useEffect } from "react"

import styles from "./Profile.module.css"
import formStyles from "../../form/Form.module.css"

import Input from "../../form/Input"


function Profile(){

    const [user, setUser] = useState({})
    const [token] = useState(localStorage.getItem('token') || '')


    //puxar os dados do usuario para editar
    useEffect(()=>{

        api.get('/users/checkuser', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((res)=>{
            setUser(res.data)
        })
    }, [token])

    function onFileChange(event){

    }
    function handleChange(event){

    }
    return(
        <section >

            <div className={styles.profile_header}>
                <h1>Perfil</h1>
                <p>imagem</p>
            </div>

            <form className={formStyles.form_container}>
                <Input
                 text="Imagem"
                 type="file"
                 name="image"
                 handleOnChange={onFileChange}
                />

                <Input
                 text="E-mail"
                 type="email"
                 name="email"
                 handleOnChange={handleChange}
                 placeholder="Digite seu email"
                 value = {user.email || ''}
                />
                <Input
                 text="Nome"
                 type="text"
                 name="name"
                 handleOnChange={handleChange}
                 placeholder="Digite seu nome"
                 value = {user.name || ''}
                />

                <Input
                 text="Telefone"
                 type="text"
                 name="phone"
                 handleOnChange={handleChange}
                 placeholder="Digite seu telefone"
                 value = {user.phone || ''}
                />
                <Input
                 text="Senha"
                 type="password"
                 name="password"
                 handleOnChange={handleChange}
                 placeholder="Digite sua senha"
                />
                <Input
                 text="Confirmação de senha "
                 type="password"
                 name="confirmPassword"
                 handleOnChange={handleChange}
                 placeholder="Confirme sua senha"
                />

                <input type="submit" value="Editar"></input>
            </form>
        </section>
    )
}

export default Profile