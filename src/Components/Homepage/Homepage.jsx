import React from 'react'
import './Homepage.css'

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="highlights">
        <div className="simon-ghost-riley-cover"></div>
      </div>
      <div className="mw2-right-column">
        <div className="mw2-column-content">
          <div className="mw2-game-logo">
            <img src="https://res.cloudinary.com/tommello/image/upload/v1668524744/Projeto%20Call%20of%20Duty/cod-mw2-logo_ma6zmx.png" id="mw2-logo" />
          </div>
          <div className="mw2-slogan">
            <p>The ultimate weapon is team.</p>
            <p>Squad up and fight alongside the iconic operators of Task Force 141 with the return of Modern Warfare</p>
          </div>
          <div className="mw2-purchase-btn-small">
            <a href="">Purchase</a>
          </div>
          <div className="mw2-trailer-video">
            <div className="mw2-video-thumb">
              <div className="mw2-thumb-container">
                <div className="thumb-play-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage