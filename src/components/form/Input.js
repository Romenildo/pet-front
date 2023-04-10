import styles from './Input.module.css'


function Input({type, text, name, placeholder,handleOnChance, value, multiple}) {

    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}: </label>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder}
                onChange={handleOnChance}
                value={value}
                {...(multiple ? {multiple}: '')}//caso de varias imagens
                ></input>
        </div>
    )
}

export default Input