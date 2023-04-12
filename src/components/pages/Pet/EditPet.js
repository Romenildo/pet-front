
import api from '../../../utils/api'

import styles from './AddPet.module.css'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import useFlashMessage from '../../../hooks/useFlashMessage'
import PetForm from '../../form/PetForm'

function EditPet(){

    const [pet, setPet] = useState({})
    const [token] = useState(localStorage.getItem('token') || '')
    const {id} = useParams()
    const { setFlashMessage } = useFlashMessage()

    //função ao abrir essa pagina
    useEffect(()=>{

        api.get(`/pets/${id}`,{
            Authorization: `Bearer ${JSON.parse(token)}`,
        }).then((res)=>{
            setPet(res.data.pet)
        })
    },[token, id])
    

    //funcao que vai ativar no filho
    async function updatePet(pet){
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

        const data = await api.patch(`pets/${pet._id}`, formData, {
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
    return (
        <section className={styles.addpet_header}>
            <div>
                <h1>Editando o Pet: {pet.name}</h1>
                <p>Depois da edição os dados serão atualizados no sistema.</p>
            </div>
            {/*Como a requisicao demora um pouco coloca a condicao para gerar o componente abaixo somente quando os dados para editar chegar */}
            {pet.name && ( <PetForm handleSubmit={updatePet} btnText="Atualizar" petData={pet}/>)}
           

        </section>
    )
}

export default EditPet