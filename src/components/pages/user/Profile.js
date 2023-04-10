import api from "../../../utils/api"
import { useState, useEffect } from "react"

import styles from "./Profile.module.css"
import formStyles from "../../form/Form.module.css"

import Input from "../../form/Input"
import useFlashMessage from "../../../hooks/useFlashMessage"
import RoundedImage from "../../layout/RoundedImage"


function Profile(){

    const [user, setUser] = useState({})
    const [preview, setPreview] = useState('')
    const [token] = useState(localStorage.getItem('token') || '')
    const { setFlashMessage } = useFlashMessage()


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
        setPreview(event.target.files[0])
        setUser({ ...user , [event.target.name]:event.target.files[0]})

    }
    function handleChange(event){
        setUser({ ...user , [event.target.name]:event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault()//pagina nao recarregar ao clicar no submit
        
        let msgType = 'sucess'       
        
        const formData = new FormData()

        const userFormData = await Object.keys(user).forEach((key) =>
             formData.append(key, user[key]),
        )

        formData.append('user', userFormData)

        const data = await api.patch('/users/edit',formData, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then( (res)=>{
            return res.data.message
        }).catch((err)=>{
            msgType = 'error'
            return err.response.data.message
        })

        setFlashMessage(data, msgType)


    }
    return(
        <section >

            <div className={styles.profile_header}>
                <h1>Perfil</h1>
                {
                    (user.image || preview) && (
                        <>
                            <RoundedImage src={preview ? URL.createObjectURL(preview): 
                                                `${process.env.REACT_APP_API}/images/users/${user.image}` }
                                 alt={user.name}
                            ></RoundedImage>

                        </>
                    )
                }
            </div>

            <form onSubmit={handleSubmit} className={formStyles.form_container}>
                <Input
                 text="Imagem"
                 type="file"
                 name="image"
                 handleOnChance={onFileChange}
                />

                <Input
                 text="E-mail"
                 type="email"
                 name="email"
                 placeholder="Digite seu email"
                 handleOnChance={handleChange}
                 value = {user.email || ''}
                />
                <Input
                 text="Nome"
                 type="text"
                 name="name"
                 placeholder="Digite seu nome"
                 handleOnChance={handleChange}
                 value = {user.name || ''}
                />

                <Input
                 text="Telefone"
                 type="text"
                 name="phone"
                 placeholder="Digite seu telefone"
                 handleOnChance={handleChange}
                 value = {user.phone || ''}
                />
                <Input
                 text="Senha"
                 type="password"
                 name="password"
                 placeholder="Digite sua senha"
                 handleOnChance={handleChange}
                />
                <Input
                 text="Confirmação de senha "
                 type="password"
                 name="confirmPassword"
                 placeholder="Confirme sua senha"
                 handleOnChance={handleChange}

                />

                <input type="submit" value="Editar"></input>
            </form>
        </section>
    )
}

export default Profile