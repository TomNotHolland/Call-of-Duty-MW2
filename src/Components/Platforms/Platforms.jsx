import React from 'react'
import './Platforms.css'

const Platforms = () => {
  return (
    <div className="platforms">
      <div className="platforms-container">
        <div className="platforms-wrapper">
          <div className="platforms-title">
            <p>Choose Your Platform</p>
          </div>
        </div>
        <div className="platforms-cards-container">
          <div className="platforms-card-layout">
            <div className="platforms-card-img">
              <div className="platform-logo">
                <img id="ps-logo" src="https://res.cloudinary.com/tommello/image/upload/v1668623117/Projeto%20Call%20of%20Duty/PlayStation-Icon-White-Logo.wine_xafk3i.svg" />
              </div>
              <p className="platform-name">Playstation</p>
            </div>
          </div>
          <div className="platforms-card-layout">
            <div className="platforms-card-img">
              <div className="platform-logo">
                <img id="xbox-logo" src="https://res.cloudinary.com/tommello/image/upload/v1668628722/Projeto%20Call%20of%20Duty/icons8-xbox_dspe76.svg" />
              </div>
              <p className="platform-name">Xbox</p>
            </div>
          </div>
          <div className="platforms-card-layout">
            <div className="platforms-card-img">
              <div className="platform-logo">
                <img id="battlenet-custom-logo" src="https://res.cloudinary.com/tommello/image/upload/v1668628353/Projeto%20Call%20of%20Duty/battlenet-icon_m9c6gt.png" />
              </div>
              <p className="platform-name">Battlenet</p>
            </div>
          </div>
          <div className="platforms-card-layout">
            <div className="platforms-card-img">
              <div className="platform-logo">
                <img id="steam-custom-logo" src="https://res.cloudinary.com/tommello/image/upload/v1668628353/Projeto%20Call%20of%20Duty/steam-icon_u5yf8v.svg" />
              </div>
              <p className="platform-name">Steam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platforms