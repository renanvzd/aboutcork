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
            <li>

              <NavLink title="Home" path="/" />
            </li>
            <li>
              <NavLink title="Historias" path="/projects" includes />
            </li>
            <li>
              <NavLink title="Duvidas" path="/projects" includes />
            </li>
            <li>
              <NavLink title="Dicas" path="/projects" includes />
            </li>
            <li>

              <NavLink title="Galeria" path="/projects" includes />
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
}

export default Header;
