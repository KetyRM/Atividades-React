import Styles from './css/Footer.module.css'
import Face from '../imagens/face.jfif'
import Insta from '../imagens/insta.jfif'
import Tiktok from '../imagens/tiktok.png'
import Whats from '../imagens/whtas.png'


function Footer(){
    return(

        <footer className={Styles.footerHome}>

            <div className={Styles.textoum}>Siga-nos  em nossas redes sociais</div>

            <div className={Styles.redes}>
            <img src={Face} alt="facebook"  className={Styles.rede}/>
            <img src={Insta} alt="instgram" className={Styles.rede} />
            <img src={Tiktok} alt="tik tok" className={Styles.rede} />
            <img src={Whats} alt="whatsapp"className={Styles.rede} />
            </div>

            <div className={Styles.textodois}> Telefone de contato: (11) 9555-3355</div>
            
        </footer>
    )
}

export default Footer