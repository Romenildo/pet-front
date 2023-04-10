 import { useState, useEffect } from "react"
import styles from "./Message.module.css"
import bus from "../../utils/bus"

 function Message () {

    const [visibility, setVisibility]= useState(false)
    const [message, setMessage] = useState('')

    const [type, setType] = useState('')


    //useEffect é para ele nao fica fazendo o evento infinitamente
    useEffect(() =>{

        bus.addListener('flash', ({message, type}) =>{
            setVisibility(true)
            setMessage(message)
            setType(type)

            //mensagem sumir depois de 3 s
            setTimeout(()=>{
                setVisibility(false)
            }, 3000)
        })

    } , [])
    return(

        //condicao de div com if
        visibility && (
            <div className={` ${styles.message} ${styles[type]}`}> 
             {message}
            </div>
        )
        
    )
 }

 export default Message