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


      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projects" path="/projects" includes />
      </ul>
    </Container>
  );
}

export default Header;
