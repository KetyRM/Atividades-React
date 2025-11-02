import Styles from './CSS/Aruba.module.css'
import Brant from '../imagens/bandeira_aruba.png'


function Aruba(){
    return(
        <>

          <section className={Styles.ar}>
                    <div className={Styles.titulo}> 
                        <h1>Venha conhecer Aruba</h1>
                    </div>
        
                    <div className={Styles.conteudo}>
                        <h2> Venha conhecer as maravilhas de Aruba</h2>
                            <p>A Escócia é um destino que combina história, natureza e cultura em paisagens cheias de encanto e tradição.
                             Com a Highland Dreams Viagens, você descobre o melhor do país por meio de roteiros personalizados que unem conforto e autenticidade.
                             Explore Edimburgo, as montanhas das Highlands e o lendário Lago Ness, vivenciando experiências únicas com todo o suporte e segurança.
                             Transforme o sonho da Escócia em uma viagem inesquecível.</p>
                             <img src={Brant} alt="Bandeira de Aruba" />
                    </div>
                </section>
        
                
                <div className={Styles.info}>
                    <div>Entre em contato</div>
                    <div>Visite nossas redes</div>
                </div>
        
        </>

    )
}

export default Aruba