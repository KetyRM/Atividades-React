import Styles from './css/Gran.module.css'
import Grand from '../imagens/GrandCanyon.jpg'


function Gran(){
    return(
        <>
        <section className={Styles.imggran}> 
        <img src={Grand} alt="Imagem do Gran Caneyon" />

        </section>
        </>

    )
}

export default Gran