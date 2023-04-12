
import { useState } from "react"
import formStyles from './Form.module.css'

import Input from './Input'
import Select from "./Select"

function PetForm({handleSubmit, petData, btnText}){

    const [pet, setPet] = useState(petData || {})
    const [preview, setPreview] = useState([])
    //melhor no back
    const colors = ['Branco', 'Preto', 'Cinza', 'Caramelo', 'Mesclado']

    function onFileChange(event){
        setPreview(Array.from(event.target.files))
        setPet({...pet, images: [...event.target.files]})

    }
    function handleChange(event){
        setPet({ ...pet , [event.target.name]:event.target.value})

    }
    function handleColor(event){
        setPet({...pet, color: [event.target.options[event.target.selectedIndex].text]})

    }

    function submit(event){
        event.preventDefault()
        console.log(pet)
    }
    return (
        <form onSubmit={submit} className={formStyles.form_container}>
            <div className={formStyles.preview_pet_images}>
                {
                    preview.length > 0 
                    //imagens do preview
                    ? preview.map((image, index)=>(
                        <img src={URL.createObjectURL(image)} alt={pet.name} key={`${pet.name}+ ${pet.index}`}></img>    
                    )):
                    //imagens do pet cadastrado
                    pet.images && pet.images.map((image, index)=>(
                        <img src={`${process.env.REACT_APP_API}/images/pets/${image}`} alt={pet.name} key={`${pet.name}+ ${pet.index}`}></img>
                    ))
                }
            </div>

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