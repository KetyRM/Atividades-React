import Styles from './css/Header.module.css'
import  Viagens from '../imagens/viagens.jpg'
import  Lupa from '../imagens/lupa.png'
import { Link } from 'react-router-dom'


function Header(){
    return(

        <header>
            <img src= {Viagens} alt="Logo da empresa"  className={Styles.img_viagem}/>

            <nav className={Styles.menu}>
                <Link to='/'>Home</Link>
                <Link to='/Escocia'>Escócia</Link>
                <Link to='/Gran'>Grand Canyon</Link>
                <Link to='/Muralha'>Muralha da China</Link>
                <Link to='/Aruba'>Aruba</Link>

            </nav>

            <div className={Styles.busca}>
                <input type="search" />
            </div>

            <img src={Lupa} alt="Lupa de pesquisa" className={Styles.lupa} />



        </header>

    )
}

export default Header