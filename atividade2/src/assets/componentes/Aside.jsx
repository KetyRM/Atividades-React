import { useOptimistic } from 'react'
import styles from './Aside.module.css'


function Aside(){
    return(
        <aside className={styles.bloco}>
            <section className={styles.conteudo}>Conteúdo</section>
            <div className={styles.caixa}></div>
            <div className={styles.caixadois}></div>
        </aside>

    )  
}

export default Aside