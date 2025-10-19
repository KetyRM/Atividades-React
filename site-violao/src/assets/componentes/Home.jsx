import Styles from './css/Home.module.css'
import Loja from '../Imagens/loja.jpg'
import Guitarrinha from '../Imagens/guitarrinha.jpg'
import Whats from '../Imagens/whats.png'
import Insta from '../Imagens/insta.png'
import Face from '../Imagens/face.png'



function Home() {
    return (
        <div className={Styles.fundo}>
            <section className={Styles.fundo1}>
                <div className={Styles.rosa}>
                    <h2>Nossa Loja - Instrumentos Musicais</h2>
                    <p>Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão da
                        qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como:
                        teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopro e muito mais!
                        Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus
                        favoritos e os receba em casa com toda a comodidade que você precisa. Confira nossas opções
                        disponíveis e tenha em mãos instrumentos de ponta!</p>
                </div>

                <div
                    className={Styles.rosa1}
                    style={{ backgroundImage: `url(${Loja})` }}
                >
                </div>
            </section>


            <section className={Styles.fundo2}>
                <div className={Styles.branca}>
                    <img src={Guitarrinha} alt="Guitarrinha" />
                    <h3>
                        VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE<br />
                        <span>R$989,50</span>
                    </h3>
                </div>

                <div className={Styles.branca}>
                    <img src={Guitarrinha} alt="Guitarrinha" />
                    <h3>
                        VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE<br />
                        <span>R$989,50</span>
                    </h3>
                </div>

                <div className={Styles.branca}>
                    <img src={Guitarrinha} alt="Guitarrinha" />
                    <h3>
                        VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE<br />
                        <span>R$989,50</span>
                    </h3>
                </div>

                <div className={Styles.branca}>
                    <img src={Guitarrinha} alt="Guitarrinha" />
                    <h3>
                        VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE<br />
                        <span>R$989,50</span>
                    </h3>
                </div>
            </section>


            <section className={Styles.fundo3}>
                <div className={Styles.mapa}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1227833051785!2d-46.69433512489202!3d-23.528085878822672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-PT!2sbr!4v1760201875448!5m2!1spt-PT!2sbr"
                    ></iframe>
                </div>

                <div className={Styles.texto_lugar}>
                    <h2 className={Styles.titu2}>Nossa Loja - Instrumentos Musicais</h2>
                    <p className={Styles.ti2}>
                        Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma
                        construção do século XIX, numa área de 500m², com uma variada gama de instrumentos, em um
                        ambiente agradável para toda a família!
                    </p>
                </div>
            </section>

            <section className={Styles.fundo4}>
                <div className={Styles.azul}>
                    <div className={Styles.formGroup}>
                        <label htmlFor="nome">Entre com o seu nome:</label><br />
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome aqui:"
                        />
                    </div>

                    <div className={Styles.formGroup}>
                        <label htmlFor="email">Entre com o seu e-mail:</label><br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Digite seu e-mail aqui:"
                        />
                    </div>

                    <div className={Styles.formGroup}>
                        <label htmlFor="pedido">Faça seu pedido:</label><br />
                        <textarea
                            id="pedido"
                            name="pedido"
                            placeholder="Faça seu pedido por aqui:"
                        ></textarea>
                    </div>

                    <button type="submit" className={Styles.enviar}>Enviar</button>
                </div>

                <div className={Styles.verde}>
                    <div>
                        <div className={Styles.titulo2}>
                            <h1 className={Styles.acesse}>Acesse também nossas redes sociais:</h1>
                        </div>

                        <div className={Styles.simbolos}>
                            <img className={Styles.i7} src={Whats} alt="Logo do WhatsApp" />
                            <img className={Styles.i7} src={Insta} alt="Logo do Instagram" />
                            <img className={Styles.i7} src={Face} alt="Logo do Facebook" />
                        </div>
                    </div>
                </div>
            </section>







        </div>
    )
}

export default Home