import Styles from './css/Home.module.css'
import Mala from '../imagens/mala.jpg'


function Home(){
    return(

        <section className={Styles.fundoHome}>
            <img  src={Mala} alt="Mala de viagens" className={Styles.mala}/>
            <div className={Styles.texto_home}>
                <h1>Encontre aqui a viagem dos seus sonhos!</h1>
                <p>Sua viagem ideal não pode ser um pacote qualquer, e é por isso que nosso serviço é totalmente personalizado. Esqueça os roteiros que não combinam com você. Queremos saber o seu estilo, o seu ritmo e o quanto você quer investir. Cuidamos de cada detalhe — os melhores voos, hospedagens confortáveis e passeios imperdíveis — para que você tenha uma experiência única, feita exclusivamente para você.
                </p>
            </div>

        </section>
    )
}

export default Home