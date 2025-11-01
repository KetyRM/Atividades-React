import Styles from './css/Escocia.module.css'
import Esco from './../imagens/Escocia.jfif'


function Escocia(){
    return(
        <>
          <section className={Styles.imgesc}>
            <img src={Esco} alt="Imagem do lado da Escocia" />

        </section>
        </>
    )
}

export default Escocia