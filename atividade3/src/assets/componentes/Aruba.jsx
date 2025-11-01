import Styles from './css/Aruba.module.css'
import Aru from '../imagens/aruba.jpg'


function Aruba(){
    return(
        <>
        <section className={Styles.imgaru}> 
        <img src={Aru} alt="Imagem de Aruba" />

        </section>
        </>

    )
}

export default Aruba