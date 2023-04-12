
import { useState } from "react"
import formStyles from './Form.module.css'

import Input from './Input'
import Select from "./Select"

function PetForm({handleSubmit, petData, btnText}){

    const [pet, setPet] = useState(petData || {})
    const [preview, setPreview] = useState([])
    //melhor no back
    const colors = ['Branco', 'Preto', 'Cinza', 'Caramelo', 'Mesclado']

    function onFileChange(){

    }
    function handleChange(){

    }
    function handleColor(){

    }

    return (
        <form className={formStyles.form_container}>

            <Input
             text="Imagens do Pet"
             type="file"
             name="images"
             handleOnChance={onFileChange}
             multiple={true}
            />
            <Input
             text="Nome do Pet"
             type="text"
             name="name"
             placeholder="Digite o nome"
             handleOnChance={handleChange}
             value={pet.name || ''}
            />
            <Input
             text="Idade do pet"
             type="text"
             name="age"
             placeholder="Digite a idade"
             handleOnChance={handleChange}
             value={pet.age || ''}
            />
            <Input
             text="Peso do Pet"
             type="number"
             name="weight"
             placeholder="Digite o peso"
             handleOnChance={handleChange}
             value={pet.weight || ''}
            />
            <Select 
             name="color"
             text ="Selecione a cor"
             options={colors}
             handleOnChange={handleColor}
             value={pet.color || ''}
            />
            <input type="submit" value={btnText} />
        </form>
    )
}

export default PetForm