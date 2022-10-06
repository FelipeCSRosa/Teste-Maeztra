import { useState } from "react";

import logomaeztra from "../assets/imgs/logo-maeztra.png"
import iconmenu from "../assets/imgs/icon-menu.png"
import iconperfil from "../assets/imgs/icon-perfil.png"
import iconheart from "../assets/imgs/icon-heart.png"
import iconbag from "../assets/imgs/icon-bag.png"
import iconbusca from "../assets/imgs/icon-busca.png"
import iconbagmobile from "../assets/imgs/icon-bag-mobile.png"
import iconnovidades from "../assets/imgs/icon-novidades.png"
import {RemoveScroll} from 'react-remove-scroll';
import "./HeaderMain.css"


function HeaderMain() {
  let [clicked, setClicked] = useState(false);

  function handleClick(){
    setClicked(!clicked)
  }

  function mobileMenu(){
  if(clicked){
    return (
      <RemoveScroll>
      <ul className="mobile-menu-nav-top">
        <li>
          <img src={iconperfil} alt="" />
          <a href="#">Minha Conta</a>
        </li>
        <li>
          <img src={iconheart} alt="" />
          <a href="#">Minha Lista de Desejos</a>
        </li>
      </ul>

      <ul className="mobile-menu-nav">
        <li id="mobile-menu-item-novidades">Novidades</li>
        <li>Vestidos</li>
        <li>Roupas</li>
        <li>Sapatos</li>
        <li>Lingerie</li>
        <li>Acessórios</li>
        <li>OUTLET</li>
      </ul>
      </RemoveScroll>  
    )
  }else{
    return(
      <>
            <ul className="mobile-menu-nav-top">
          <li>
            <img src={iconperfil} alt="" />
            <a href="#">Minha Conta</a>
          </li>
          <li>
            <img src={iconheart} alt="" />
            <a href="#">Minha Lista de Desejos</a>
          </li>
        </ul>

        <ul className="mobile-menu-nav">
          <li id="mobile-menu-item-novidades">Novidades</li>
          <li>Vestidos</li>
          <li>Roupas</li>
          <li>Sapatos</li>
          <li>Lingerie</li>
          <li>Acessórios</li>
          <li>OUTLET</li>
        </ul>
      </>
    )
  }
}

  return(
    <>
      <div className="header-main">
        <div className="header-main-container">
          <div id="mobile" onClick={handleClick}>
            <img src={iconmenu} alt="" />
          </div>

          <a href="#"><img src={logomaeztra} alt="" /></a>

          <div className="mobile-spacer"></div>

          <div className="mobile-icons">
            <img src={iconbusca} alt="" />
            <img src={iconbagmobile} alt="" />
          </div>

          <div className="header-main-search">
            <input type="search" name="" id="" placeholder="O Que Você Busca?"/>
            <div className="button-buscar">
              <p>Buscar</p>
            </div>
          </div>

          <div className="header-main-nav">
            <ul id="header-main-navbar" className={clicked ? "#header-main-navbar active": "#header-main-navbar"}>
              <li>
                <img src={iconperfil} alt="" />
                <a href="#">Minha Conta</a>
              </li>
              <li>
                <img src={iconheart} alt="" />
                <a href="#">Minha Lista de Desejos</a>
              </li>
              <li className="nav-item-bag">
                <img src={iconbag} alt="" />
                <a href="#">Meu carrinho</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className={clicked ? "#mobile-menu active": "#mobile-menu"}>
      {mobileMenu()}
      </div>
    </>
  )
}

export default HeaderMain;