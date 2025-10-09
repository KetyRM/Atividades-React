import Styles from './css/Header.module.css'
import  Viagens from '../imagens/viagens.jpg'
import  Lupa from '../imagens/lupa.png'


function Header(){
    return(

        <header>
            <img src= {Viagens} alt="Logo da empresa"  className={Styles.img_viagem}/>
            <nav  className={Styles.menu}>
                <a href="#">Home</a>
                <a href="#">Escócia</a>
                <a href="#">Gran Canyon</a>
                <a href="#">Muralha da China</a>
                <a href="#">Aruba</a>
            </nav>

            <div className={Styles.busca}>
                <input type="search" />
            </div>

            <img src={Lupa} alt="Lupa de pesquisa" className={Styles.lupa} />



        </header>

    )
}

export default Header