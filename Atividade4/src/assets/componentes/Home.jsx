import Styles from './css/Home.module.css'


function Home(){
    return(
        <div className={Styles.fundo}>
            <section className={Styles.fundo1}> 
                <div className={Styles.rosa}>Rosa</div>
                <div className={Styles.rosa}>Rosa</div>
            </section>


            <section className={Styles.fundo2}>
                <div className={Styles.branca}>Branco</div>
                <div className={Styles.branca}>Branco</div>
                <div className={Styles.branca}>Branco</div>
                <div className={Styles.branca}>Branco</div>
            </section>


            <section className={Styles.fundo3}>laraja</section>


            <section className={Styles.fundo4}>
                <div className={Styles.azul}>azul</div>
                <div className={Styles.verde}>verde</div>
            </section>
        </div>
    )
}

export default Home