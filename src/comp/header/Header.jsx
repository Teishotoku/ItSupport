import './styleHeader.scss'
import Logo from '../../assets/img/Logo.png'
import arrow from '../../assets/img/arrow-square-down.svg'
import send from '../../assets/img/Send.svg'

const Header = () => {
  return (
    <header>

      <nav>
        <div className="navLeft">
          <img src={Logo} />
          <div>
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
          <div>
            <h1>EN</h1>
            <img src={arrow} />
          </div>
          <button><p>CONTACT US</p> <img src={send} /></button>
        </div>
      </nav>

      <section className="headSection">
        <div className="headNothing" />

        <div className="headLine">
          <div>
            <h1 className="hUp">Developing IT solutions to scale</h1>
            <h1 className="hDown">up your business</h1>
          </div>
        </div>

        <div className="headRound">
          <h1>Estimate</h1>
          <h1>Project</h1>
        </div>
      </section>

    </header>
  )

}

export default Header
