import Styles from './css/Muralha.module.css'
import Mura from '../imagens/Muralha.jpg'
import Bandeira from '../imagens/bandeira_chine.png'


function Muralha(){
    return(
        <>

         <section className={Styles.ch}>
                    <div className={Styles.titulo}> 
                        <h1>Venha conhecer a Muralha da China</h1>
                    </div>
        
                    <div className={Styles.conteudo}>
                        <h2> Venha conhecer as maravilhas da China</h2>
                            <p>A China é um destino que une tradição milenar e modernidade em cada detalhe de suas paisagens e cidades vibrantes.
                              Com a Highland Dreams Viagens, você vivencia o melhor do país por meio de roteiros personalizados que revelam sua cultura fascinante e seus contrastes únicos.
                            Descubra a imponente Grande Muralha, os templos ancestrais de Pequim, os arranha-céus futuristas de Xangai e a serenidade dos Jardins de Suzhou.
                            Mergulhe na rica gastronomia, nas tradições seculares e na hospitalidade do povo chinês.
                            Transforme o encanto do Oriente em uma experiência inesquecível e autêntica.</p>
                            <img src={Bandeira} alt="Bandeira da china" />
                    </div>
                </section>
        
                
                <div className={Styles.info}>
                    <div>Entre em contato</div>
                    <div>Visite nossas redes</div>
                </div>

        </>

    )
}

export default Muralha