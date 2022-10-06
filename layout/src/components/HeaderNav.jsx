import iconnovidades from "../assets/imgs/icon-novidades.png"
import './HeaderNav.css'

function HeaderNav() {
  return(
    <>
      <nav className="header-nav">
        <ul className="header-nav-navbar">
          <li id="item-novidades">
            <img src={iconnovidades} alt="" />
            <p>Novidades</p>
          </li>
          <li>Vestidos</li>
          <li>Roupas</li>
          <li>Sapatos</li>
          <li>Lingerie</li>
          <li>Acessórios</li>
          <li>OUTLET</li>
        </ul>
      </nav>
    </>
  )
}

export default HeaderNav