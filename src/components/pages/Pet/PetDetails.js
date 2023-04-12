import styles from "./PetDetails.module.css";
import api from "../../../utils/api";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import useFlashMessage from "../../../hooks/useFlashMessage";
function PetDetails() {
  const [pet, setPet] = useState({});
  const {id} = useParams()
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  //função ao abrir essa pagina
  useEffect(() => {
    api
      .get(`/pets/${id}`)
      .then((res) => {
        setPet(res.data.pet);
      });
  }, [id]);

  return(
    <>
        {/*Tecnica utilizada para so renderizaro o componente quando receber o pet da requisicao */}
        {pet.name && (
            <section className={styles.pet_details_container}>
                <div className={styles.pet_details_header }>
                    <h1>Conhecendo o Pet: {pet.name}</h1>
                    <p>Se tiver interesse, masque uma visita para conhecê-lo</p>
                </div>
                
                <div className={styles.pet_images }>
                    { pet.images.map((image, index)=>(
                        <img 
                        src={`${process.env.REACT_APP_API}/imgs/pets/${image}` }
                        alt={pet.name}
                        key={index}
                    />
                    ))}
                </div>
                <p>
                    <span className="bold"> Peso:</span>{pet.weight}kg
                </p>
                <p>
                    <span className="bold"> Idade:</span>{pet.age} anos
                </p>

                { token?(
                    <button>Solicitar uma visita</button>
                ):(
                    <p>Você precisa <Link to="/register">criar uma conta</Link> para solicitar a visita.</p>
                )}
            </section>
        )}
    
    </>
  );
}

export default PetDetails;
