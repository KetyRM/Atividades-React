import Styles from './css/Gran.module.css'
import Grand from '../imagens/GrandCanyon.jpg'
import Bande from '../imagens/bandeira_estados.jpg'


function Gran(){
    return(
        <>
        <section className={Styles.quen}>
                    <div className={Styles.titulo}> 
                        <h1>Venha conhecer o Grand Canyon</h1>
                    </div>
        
                    <div className={Styles.conteudo}>
                        <h2> Venha conhecer o Grand Canyon</h2>
                            <p>O Grand Canyon é um espetáculo que combina geologia, imensidão e aventura em paisagens cheias de cores e silêncio monumental.
                            Com a Highland Dreams Viagens (ou a sua agência), você explora o coração do Oeste americano por meio de roteiros personalizados que unem emoção e segurança.
                            Descubra a grandiosidade da Margem Sul (South Rim), sobrevoe os cânions em helicóptero e aventure-se pelas trilhas de Havasu Falls, vivenciando experiências únicas com todo o suporte e conforto.
                        Transforme o sonho do Grand Canyon em uma viagem inesquecível.</p>
                        <img className={Styles.bae} src={Bande} alt="Bandeira dos Estados Unidos" />
                    </div>
                </section>
        
                
                <div className={Styles.info}>
                    <div>Entre em contato</div>
                    <div>Visite nossas redes</div>
                </div>
        
        </>

    )
}

export default Gran