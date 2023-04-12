
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import useFlashMessage from "../../../hooks/useFlashMessage"
import RoundedImage from "../../layout/RoundedImage"
import api from "../../../utils/api"

import styles from './Dashboard.module.css'

function MyPets(){

    const [pets, setPets] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const { setFlashMessage } = useFlashMessage()
    
    //puxar os pets do banco
    useEffect(()=>{

        api.get('/pets/mypets', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((res)=>{
            setPets(res.data.pets)
        })
    }, [token])

    return (
        <section >
            <div className={styles.petlist_header}>
                <h1>MyPets</h1>
                <Link to='/pet/add'>Cadastrar Pet</Link>
            </div>
            
            <div className={styles.petlist_container}>
                {pets.length > 0 && (
                    pets.map((pet)=>(
                        <div key={pet._id} className={styles.petlist_row}>
                            <RoundedImage 
                                src={`${process.env.REACT_APP_API}/imgs/pets/${pet.images[0]}` }
                                 alt={pet.name}
                                 width="px75"
                            /> 
                            <span className="bold">{pet.name}</span>
                            <div className={styles.actions}>
                                {pet.available ? (
                                    <>
                                    {pet.adopter && <button className={styles.conclude_btn}> Concluir adoção</button>}
                                    <Link to={`/pet/edit/${pet._id}`}>Editar</Link>
                                    <button>Excluir</button>
                                    </>
                                ):(
                                    <p>Pet já adotado</p>
                                )}

                            </div>
                        </div>
                    ))
                )}
                {pets.length === 0 && <p>Nenhum Pet cadastrado</p>}
            </div>
        </section>
    )
}

export default MyPets