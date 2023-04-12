
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import useFlashMessage from "../../../hooks/useFlashMessage"
import RoundedImage from "../../layout/RoundedImage"
import api from "../../../utils/api"

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
        <section>
            <div>
                <h1>MyPets</h1>
                <Link to='/pet/add'>Cadastrar Pet</Link>
            </div>
            
            <div>
                {pets.length > 0 && <p>Meus Pets cadastrados</p>}
                {pets.length === 0 && <p>Nenhum Pet cadastrado</p>}
            </div>
        </section>
    )
}

export default MyPets