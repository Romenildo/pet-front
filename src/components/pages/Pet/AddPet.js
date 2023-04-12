
import api from '../../../utils/api'

import styles from './AddPet.module.css'

import { useState } from 'react'
import { useNavigate} from "react-router-dom"//no lugar do useHistory


import useFlashMessage from '../../../hooks/useFlashMessage'
import PetForm from '../../form/PetForm'

function AddPet(){

    const [token] = useState(localStorage.getItem('token') || '')
    const { setFlashMessage } = useFlashMessage()
    const navigate = useNavigate()
    //funcao que vai ativar no filho
    async function registerPet(pet){
        let msgType = 'sucess'

        const formData = new FormData

        //percorrer os campos de pet (nome, idade, peso...) pegando o nome e valor
        await Object.keys(pet).forEach((key)=>{
            if(key=== 'images' ){
                //como images é um array pra transformar o array para o form data
                for(let i = 0; i < pet['images'].length;i++){
                    formData.append('images', pet['images'][i])
                }
            }else{
                formData.append(key, pet[key])
            }
        })

        const data = await api.post('/pets/create', formData, {
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
        if(msgType !== 'error'){
            navigate('/pet/mypets')
        }
    }
    return (
        <section className={styles.addpet_header}>
            <div>
                <h1>Cadastre um Pet</h1>
                <p>Depois ele ficará disponível para adoção.</p>
            </div>
            <PetForm handleSubmit={registerPet} btnText="Cadastrar Pet"/>

        </section>
    )
}

export default AddPet