import Styles from './css/Footer.module.css'
import whats from "../Imagens/whats.png"
import insta from "../Imagens/insta.png"
import face from "../Imagens/face.png"


function Footer() {
    return (
        <footer>
            <div className={Styles.elementos}>
                <div className={Styles.text3}>
                    <h4>Nossa Loja – Instrumentos Musicais</h4>
                    <p>
                        Rua Tito, 54 – Lapa<br />
                        São Paulo – Brasil
                    </p>
                </div>
                <div className={Styles.social}>
                    <img className={Styles.soci} src={whats} alt="WhatsApp" />
                    <img className={Styles.soci} src={insta} alt="Instagram" />
                    <img className={Styles.soci} src={face} alt="Facebook" />
                </div>
            </div>
        </footer>
    )
}

export default Footer