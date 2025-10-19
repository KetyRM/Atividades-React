import Styles from './CSS/Header.module.css';
import Fundo from '../Imagens/guitarras_header.jpg';

function Header() {
  return (
    <header
      className={Styles.header}
      style={{ backgroundImage: `url(${Fundo})` }} 
    >
      <nav className={Styles.nav}>
        <a href="#">Home</a>
        <a href="#">Quem somos</a>
        <a href="#">Instrumentos</a>
        <a href="#">Endereço</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
