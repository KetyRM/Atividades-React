import Styles from './css/Muralha.module.css'
import Mura from '../imagens/Muralha.jpg'


function Muralha(){
    return(
        <>
        <section className={Styles.imgmura}> 
        <img src={Mura} alt="Imagem da Muralha da China" />

        </section>
        </>

    )
}

export default Muralha