import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import styles from "./Home.module.css"
import api from "../../utils/api"

function Home(){

    const [pets, setPets] = useState([])
    
    //puxar os pets do banco
    useEffect(()=>{

        api.get('/pets').then((res)=>{
            setPets(res.data.pets)
        })

    }, [])

    return (
        <section>
            <div className={styles.pet_home_header}>
                <h1>Adote um Pet</h1>
                <p>Veja os detalhes de cada um e conheça o tutor deles.</p>
            </div>
            <div className={styles.pet_container}>
                {pets.length > 0 && (
                    pets.map((pet)=>(
                        <div className={styles.pet_card} key={pet._id}>
                            {/*MOstrando as imagens dos pet como um background */}
                            <div className={styles.pet_card_image} style={{backgroundImage:`url(${process.env.REACT_APP_API}/imgs/pets/${pet.images[0]})` }}></div>
                            <h3>{pet.name}</h3>
                            <p>
                                <span className="bold">Peso: {pet.weight}kg</span>
                            </p>

                            {pet.available ?(
                                <Link to={`pet/${pet._id}`}>Mais detalhes</Link>
                            ):(<p className={styles.adopted_text}>Adotado</p>)}
                        </div>
                    ))
                )}
                {pets.length === 0 && (
                    <p>Não há pets cadastrados ou disponíveis para adoção no momento!</p>
                )}
            </div>
        </section>
    )
}

export default Home