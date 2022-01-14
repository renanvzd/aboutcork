import { useState } from 'react'
import NavLink from './NavLink';
import { Container } from './styles';
import fourleaf from '../../assets/four-leaf.png';


function Header() {
  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container>
      <div>
        <img src={fourleaf} alt="Four Leaf" className='fourleaf' />
        <h1>Cork</h1>
      </div>


      <nav>
        <img className='barMenu' src='https://i.imgur.com/cmahuLK.png' onClick={showSidebar} alt='menu' />
        <div className={sidebar ? 'navMenuActive' : 'navMenu'}>
          {/* <div className='menubar'>
        <div className='navMenuActive'> */}
          <div className='listItems'>
            <ul>
              <NavLink title="Home" path="/" />
              <NavLink title="Historias" path="/projects" includes />
              <NavLink title="Duvidas" path="/projects" includes />
              <NavLink title="Dicas" path="/projects" includes />
              <NavLink title="Galeria" path="/projects" includes />

            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Header;
