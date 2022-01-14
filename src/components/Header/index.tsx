import NavLink from './NavLink';
import { Container } from './styles';
import fourleaf from '../../assets/four-leaf.png';


function Header() {
  return (
    <Container>
      <div>
        <img src={fourleaf} alt="Four Leaf" className='fourleaf' />
        <h1>Cork</h1>
      </div>


      <nav>
        <img className='barMenu' src='https://i.imgur.com/cmahuLK.png' alt='menu' />
        <div className='menubar'>
          <ul>
            <NavLink title="Home" path="/" />
            <NavLink title="Historias" path="/projects" includes />
            <NavLink title="Duvidas" path="/projects" includes />
            <NavLink title="Dicas" path="/projects" includes />
            <NavLink title="Galeria" path="/projects" includes />
          </ul>
        </div>
      </nav>
    </Container>
  );
}

export default Header;
