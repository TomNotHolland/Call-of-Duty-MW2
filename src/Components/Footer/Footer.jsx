import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li>
              <a href="">Legal</a>
            </li>
            <li>|</li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>|</li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>|</li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>|</li>
            <li>
              <a href="">Cookie Policy</a>
            </li>
            <li>|</li>
            <li>
              <a href="">Support</a>
            </li>
            <li>|</li>
            <li>
              <a href="">Code of Conduct</a>
            </li>
            <li>|</li>
          </ul>
        </div>
        <ul className="divider-line">
          <li className="edge-dot"></li>
          <li className="side-line"></li>
          <li className="middle-line"></li>
          <li className="side-line"></li>
          <li className="edge-dot"></li>
        </ul>
        <div className="footer-logos">
          <div className="studios">
            <ul>
              <li className="activision">
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526565/Projeto%20Call%20of%20Duty/activision-logo_vkojiy.svg" />
                </a>
              </li>
              <li className="treyarch">
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526567/Projeto%20Call%20of%20Duty/treyarch-logo_fon2kf.svg" />
                </a>
              </li>
              <li className="sledgehammer-games">
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526567/Projeto%20Call%20of%20Duty/shg-logo_rqoa6g.png" />
                </a>
              </li>
              <li className="infinity-ward">
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526566/Projeto%20Call%20of%20Duty/infinity-ward-logo_wd1krc.svg" />
                </a>
              </li>
              <li className="raven">
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526566/Projeto%20Call%20of%20Duty/raven-logo_pfgzei.png" />
                </a>
              </li>
              <li className="toysforbob">
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526567/Projeto%20Call%20of%20Duty/toys-for-bob-logo_uvxo6l.svg" />
                </a>
              </li>
              <li className="shanghai-studio">
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526565/Projeto%20Call%20of%20Duty/atvi-shanghai-logo_my2u1k.png" />
                </a>
              </li>
              <li className="beenox">
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526565/Projeto%20Call%20of%20Duty/beenox-logo_fb05yq.png" />
                </a>
              </li>
              <li className="demonware">
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526565/Projeto%20Call%20of%20Duty/demonware-logo_cf83mf.png" />
                </a>
              </li>
              <li className="high-moon">
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526565/Projeto%20Call%20of%20Duty/high-moon-logo_ptmfpj.png" />
                </a>
              </li>
              <li className="digital-legends">
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526565/Projeto%20Call%20of%20Duty/digital-legends-logo_frg0p6.png" />
                </a>
              </li>
              <li className="solid-state-studios">
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526567/Projeto%20Call%20of%20Duty/solid-state-logo_fqatgd.png" />
                </a>
              </li>
            </ul>
          </div>
          <div className="esrb-logo">
            <ul>
              <li>
                <a href="">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668526565/Projeto%20Call%20of%20Duty/250px-PEGI_zx1psn.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyrights">
          <p>© 2022 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY, MODERN WARFARE, and CALL OF DUTY WARZONE are trademarks of Activision Publishing, Inc. All other trademarks and trade names are the property of their respective owners.</p>
        </div>
        <div className="about me">
          <p id="author">
            Done by: Tom F. Mello
          </p>
          <a href="https://www.linkedin.com/in/tom-mello/" target="_blank">
            <div className="linkedin"></div>
          </a>
          <a id="github" href="https://www.github.com/TomNotHolland/" target="_blank">
            <img className="github" src="https://res.cloudinary.com/tommello/image/upload/v1668643896/Projeto%20Call%20of%20Duty/github-icon_vw0psp.svg" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer