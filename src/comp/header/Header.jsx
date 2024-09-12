import './styleHeader.scss'
import Logo from '../../assets/img/Logo.png'

const Header = () => {
  return (
    <header>
      <nav>
        <div>
            <img src={Logo}/>
            <div className='navLeft'>
            <h1>SUPPORT</h1>
            <h1>GROUP</h1>
          </div>
        </div>
        <ul>
          <li><p>about</p></li>
          <li><p>our services</p></li>
          <li><p>job openings</p></li>
        </ul>
        <div className='navRight'>
          <h1>EN</h1>
          <button>CONTACT US</button>
        </div>
      </nav>
    </header>
  )

}

export default Header
