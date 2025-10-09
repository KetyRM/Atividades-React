import styles from './Header.module.css'


function Header(){
    return(

     <header>
        <div className={styles.azul}>Conteúdo da camada 1</div>
        <div className={styles.vermelho}>Conteúdo da camada 2</div>
     </header>

    )  
}

export default Header
