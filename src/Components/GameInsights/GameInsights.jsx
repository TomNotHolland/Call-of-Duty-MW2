import React from 'react'
import './GameInsights.css'

const GameInsights = () => {
  return (
    <section className="insights">
      <div className="insight-wrapper">
        <h2 id="insight-title">MODERN WARFARE® II WILL FEATURE A MASSIVE AMOUNT OF CONTENT FROM DAY 1</h2>
        <section className="insight-gallery">
          <div className="insight-gallery-container">
            <div className="insight-gallery-content">
              <div className="img-wrapper">
                <div className="insight-img-content">
                  <a href="">
                    <img src="https://res.cloudinary.com/tommello/image/upload/v1668526566/Projeto%20Call%20of%20Duty/mw2-campaign_dhlxm5.jpg" />
                  </a>
                </div>
                <p>
                  Squad up and fight alongside Task Force 141 in a globe-trotting single-player campaign.
                </p>
              </div>
            </div>
            <div className="insight-gallery-content">
              <div className="img-wrapper">
                <div className="insight-img-content">
                  <a href="">
                    <img src="https://res.cloudinary.com/tommello/image/upload/v1668526567/Projeto%20Call%20of%20Duty/mw2-multiplayer_wchlg7.jpg" />
                  </a>
                </div>
                <p>
                  Play lone-wolf or rally with your team in immersive multiplayer combat, complete with new locales and ways to play.
                </p>
              </div>
            </div>
            <div className="insight-gallery-content">
              <div className="img-wrapper">
                <div className="insight-img-content">
                  <a href="">
                    <img src="https://res.cloudinary.com/tommello/image/upload/v1668526567/Projeto%20Call%20of%20Duty/mw2-home-spec-ops_kwpd9y.jpg" />
                  </a>
                </div>
                <p>
                  Join your squad for evolved Special Ops, a tactical co-op mode to advance your team-building skills.
                </p>
              </div>
            </div>
            <div className="insight-gallery-content">
              <div className="img-wrapper">
                <div className="insight-img-content">
                  <a href="">
                    <img src="https://res.cloudinary.com/tommello/image/upload/v1668526566/Projeto%20Call%20of%20Duty/mw2-seasonal_ple93x.jpg" />
                  </a>
                </div>
                <p>
                  Expect a massive calendar of free content post-launch featuring evolving gameplay with new maps, modes, seasonal events, community celebrations and more.
                </p>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </section>
  )
}

export default GameInsights