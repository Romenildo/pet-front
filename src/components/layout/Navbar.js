
import { Link } from "react-router-dom"
import Logo from "../../assets/img/logo.png"
import styles from "./Navbar.module.css"

//context
import { Context } from "../../context/UserContext"
import { useContext } from "react"

function Navbar(){

    const {authenticated, logout } = useContext(Context)

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <img src={Logo} alt="dog_logo"></img>
                <h2> Adote um Pet</h2>
            </div>
            <ul >
                <li>
                    <Link to="/">Adotar</Link>
                </li>


                {/* Condicao caso o usuario esteja logado mudar as opcoes do menu */}

                {authenticated ? 
                ( 
                    <>
                        <li>
                            <Link to="/pet/myadoptions">Minhas adoções</Link>
                        </li>
                        <li>
                            <Link to="/pet/mypets">Meus Pets</Link>
                        </li>
                        <li>
                            <Link to="/user/profile">Perfil</Link>
                        </li>
                        <li onClick={logout}> Sair</li>
                    </>
                ) : ( 
                    <>
                        <li>
                            <Link to="/login">Entrar</Link>
                        </li>
                        <li>
                            <Link to="/register">Cadastrar</Link>
                        </li>
                    </>
                )}
                
            </ul>
        </nav>
    )
}

export default Navbar