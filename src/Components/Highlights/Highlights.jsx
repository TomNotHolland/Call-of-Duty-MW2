import React from 'react'
import './Highlights.css'

const Highlights = () => {
  return (
    <section className="features">
      <div className="mw2-logo-alt">
        <p>Welcome to the new era of</p>
        <img src="https://res.cloudinary.com/tommello/image/upload/v1668591549/Projeto%20Call%20of%20Duty/cod-logo-alt_znojbw.png" />
      </div>
      <div className="features-description">
        <p>New gameplay innovations. All-new gun handling. Advanced AI. Modern Warfare® II bring you a global campaign, immersive multiplayer combat and narrative-driven Special Ops.</p>
      </div>
      <div className="mw2-gallery">
        <div className="mw2-gallery-container">
          <div className="pictures-track">
            <div className="mw2-card">
              <div className="card-container">
                <div className="img-container">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668525988/Projeto%20Call%20of%20Duty/new_era-mw2_wjz54j.jpg" />
                </div>
                <div className="img-caption">
                  <h3>MODERN WARFARE II</h3>
                  <p>
                    Call of Duty<sup>®</sup>: Modern Warfare<sup>®</sup>  II drops players into an unprecedented global conflict that features the return of the iconic operators of Task Force 141.
                  </p>
                </div>
              </div>
            </div>
            <div className="mw2-card">
              <div className="card-container">
                <div className="img-container">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668525988/Projeto%20Call%20of%20Duty/new_era-features_lfxmjw.jpg" />
                </div>
                <div className="img-caption">
                  <h3>FEATURES</h3>
                  <p>Infinity Ward brings fans state-of-the-art gameplay, with all-new gun handling, advanced AI system, a new Gunsmith and a suite of other gameplay and graphical innovations that elevate the franchise to new heights.</p>
                </div>
              </div>
            </div>
            <div className="mw2-card">
              <div className="card-container">
                <div className="img-container">
                  <img src="https://res.cloudinary.com/tommello/image/upload/v1668525988/Projeto%20Call%20of%20Duty/new_era-launch_pvhoc3.jpg" />
                </div>
                <div className="img-caption">
                  <h3>LAUNCH CONTENT</h3>
                  <p><i>Modern Warfare: II</i> will launch with a globe-trotting single-player campaign, immersive Multiplayer combat and a narrative-driven, co-op Special Ops experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mw2-further-info">
        <p>
          <i>Modern Warfare II</i> connects with the new Call of Duty®: Warzone
          <sup>TM</sup> 2.0 experience, and with it, the evolution in Battle Royale with a brand-new play space and sandbox mode. Expect a massive calendar of free content post-launch featuring evolving gameplay with new maps, modes, seasonal events, community celebrations and more.
        </p>
        <p>Stay Frosty.</p>
      </div>
    </section>
  )
}

export default Highlights