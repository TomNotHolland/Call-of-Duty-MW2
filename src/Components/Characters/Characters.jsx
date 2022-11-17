import React from 'react'
import './Characters.css'

const Characters = () => {
  return (
    <div className="task-force-141">
      <div className="title">
        <h2>Welcome To Task Force 141</h2>
      </div>
      <div className="tf-141-gallery">
        <div className="tf-141-container">
          <div className="tf-141-content">
            <div className="tf-141-wrapper">
              <div className="character">
                <div className="character-wrapper">
                  <div className="character-img">
                    <img src="https://res.cloudinary.com/tommello/image/upload/v1668526184/Projeto%20Call%20of%20Duty/sgt.john-soap-mactavish_tdiak5.png" alt={`John "Soap" MacTavish`} />
                  </div>
                  <div className="character-info">
                    <p>
                      Sgt. Johnny
                      <span>“Soap”</span>
                      MacTavish
                    </p>
                    <img id="soldier-country" src="https://res.cloudinary.com/tommello/image/upload/v1668630453/Projeto%20Call%20of%20Duty/scotland-flag_iggtda.png" />
                  </div>
                </div>
              </div>
              <div className="character">
                <div className="character-wrapper">
                  <div className="character-img">
                    <img src="https://res.cloudinary.com/tommello/image/upload/v1668526184/Projeto%20Call%20of%20Duty/sgt-kyle-gaz-garrick_nvezoh.png" alt={`Kyle "Gaz" Garrick`} />
                  </div>
                  <div className="character-info">
                    <p>
                      Sgt. Kyle
                      <span>“Gaz”</span>
                      Garrick
                    </p>
                    <img id="soldier-country" src="https://res.cloudinary.com/tommello/image/upload/v1668630453/Projeto%20Call%20of%20Duty/union-jack-flag_azbfft.png" />
                  </div>
                </div>
              </div>
              <div className="character">
                <div className="character-wrapper">
                  <div className="character-img">
                    <img src="https://res.cloudinary.com/tommello/image/upload/v1668526184/Projeto%20Call%20of%20Duty/lt-simon-ghost-riley_zb1sl2.png" alt={`Simon “Ghost” Riley`} />
                  </div>
                  <div className="character-info">
                    <p>
                      Lt. Simon
                      <span>“Ghost”</span>
                      Riley
                    </p>
                    <img id="soldier-country" src="https://res.cloudinary.com/tommello/image/upload/v1668630453/Projeto%20Call%20of%20Duty/union-jack-flag_azbfft.png" />
                  </div>
                </div>
              </div>
              <div className="character">
                <div className="character-wrapper">
                  <div className="character-img">
                    <img src="https://res.cloudinary.com/tommello/image/upload/v1668526184/Projeto%20Call%20of%20Duty/cpt-john-price_yw52ln.png" alt="Captain John Price" />
                  </div>
                  <div className="character-info">
                    <p>
                      Captain
                      <span>John</span>
                      Price
                    </p>
                    <img id="soldier-country" src="https://res.cloudinary.com/tommello/image/upload/v1668630453/Projeto%20Call%20of%20Duty/union-jack-flag_azbfft.png" />
                  </div>
                </div>
              </div>
              <div className="character">
                <div className="character-wrapper">
                  <div className="character-img">
                    <img src="https://res.cloudinary.com/tommello/image/upload/v1668526184/Projeto%20Call%20of%20Duty/colonel-alejandro-vargas_hzmgan.png" alt="Colonel Alejandro Vargas" />
                  </div>
                  <div className="character-info">
                    <p>
                      Colonel
                      <span>Alejandro</span>
                      Vargas
                    </p>
                    <img id="soldier-country" src="https://res.cloudinary.com/tommello/image/upload/v1668630453/Projeto%20Call%20of%20Duty/mexico-flag_fmvcit.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Characters