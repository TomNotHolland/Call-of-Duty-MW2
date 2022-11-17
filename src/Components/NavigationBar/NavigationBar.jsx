import React from 'react'
import './NavigationBar.css'
import Suboption from './Suboption/Suboption'

export const NavigationBar = () => {

  return (
    <header className="double-header">
      <div className="global-header">
        <div className="global-header-left">
          <div className="logo">
            <a href="">
              <img src="https://res.cloudinary.com/tommello/image/upload/v1668525321/Projeto%20Call%20of%20Duty/cod-logo-white_cqzbvq.svg" alt="Call of Duty Logo" />
            </a>
          </div>
          <nav className="global-nav anchor-container">
            <ul id="menubar-1" >
              <li className="main-item option-games" >
                <a href="#">
                  Games
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668525547/Projeto%20Call%20of%20Duty/menu-arrow_zpoyc8.svg" />
                </a>
                <ul className="submenu" id="games">
                  <Suboption OptionName="Modern Warfare II" />
                  <Suboption OptionName="Warzone 2.0" />
                  <Suboption OptionName="Warzone" />
                  <Suboption OptionName="Vanguard" />
                  <Suboption OptionName="Warzone Mobile" />
                  <Suboption OptionName="Call of Duty®: Mobile" />
                </ul>
              </li>
              <li className="alt-item">
                <a href="">News</a>
              </li>
              <li className="main-item option-esports">
                <a href="">
                  Esports
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668525547/Projeto%20Call%20of%20Duty/menu-arrow_zpoyc8.svg" />
                </a>
                <ul className="submenu" id="esports" >
                  <Suboption OptionName="Call of Duty League" />
                  <Suboption OptionName="Call of Duty: Mobile World Championship" />
                  <Suboption OptionName="World Series of Warzone" />
                </ul>
              </li>
              <li className="alt-item">
                <a href="">Support</a>
              </li>
              <li className="main-item option-shop">
                <a href="">
                  Shop
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668525547/Projeto%20Call%20of%20Duty/menu-arrow_zpoyc8.svg" />
                </a>
                <ul className="submenu" id="shop">
                  <Suboption OptionName="Buy MWII" />
                  <Suboption OptionName="Buy Vanguard" />
                  <Suboption OptionName="Buy Black Ops Cold War" />
                  <Suboption OptionName="MyCOD Store" />
                  <Suboption OptionName="COD Gear Shop" />
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="global-header-right">
          <div className="login-area anchor-container">
            <a href="" className="login">Login</a>
            |
            <a href="" className="signup">Sign up</a>
          </div>
          <div className="mycod-area anchor-container">
            <a href="">My Call of Duty</a>
          </div>
          <div className="purchase-mw2">
            <a href="">Purchase MWII</a>
          </div>
        </div>
      </div>
      <div className="game-header">
        <div className="mw2-game-subheader-left">
          <div className="subheader-logo anchor-container">
            <a href="">
              <img src="https://res.cloudinary.com/tommello/image/upload/v1668525343/Projeto%20Call%20of%20Duty/mw2-logo_qkl4y1.png" alt="Call of Duty®: Modern Warfare II" />
            </a>
          </div>
          <div className="mw2-game-nav">
            <ul className="anchor-container">
              <li className="features-option">
                <a href="">
                  Features
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668525547/Projeto%20Call%20of%20Duty/menu-arrow_zpoyc8.svg" />
                </a>
                <ul className="submenu" id="features">
                  <Suboption OptionName="Multiplayer" />
                  <Suboption OptionName="Campaign" />
                  <Suboption OptionName="Sony" />
                  <Suboption OptionName="PC" />
                </ul>
              </li>
              <li>
                <a href="">Season 1</a>
              </li>
              <li>
                <a href="">Battle Pass</a>
              </li>
              <li>
                <a href="">Ricochet</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
