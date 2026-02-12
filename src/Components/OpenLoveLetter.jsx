import React, { useState } from 'react'

export default function OpenLoveLetter({ onBack }) {
  const [isAccepted, setIsAccepted] = useState(false)
  const [noBtnStyle, setNoBtnStyle] = useState({})

  const moveNoButton = () => {
    const x = Math.random() * 60 + 20
    const y = Math.random() * 25 + 65
    setNoBtnStyle({
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
    })
  }

  return (
    <main className="valentine-page">
      <section className="hero letter-card">
        <p className="tag">A Letter For You</p>
        
        {!isAccepted ? (
          <>
            <h1>My Love Letter</h1>
            <p className="hero-text romantic-line" style={{ marginBottom: '1rem' }}>
              My Dearest, <br /><br />
              In a world of billions, my heart chose you. You are the melody to my life&apos;s song and the peace in my chaotic days.<br />
              Every day with you feels softer, brighter, and full of meaning.<br />
              Thank you for being my laughter, my comfort, and my greatest adventure.<br />
              <br />
              I love you, always.<br />
              - Yours Forever
            </p>
            <div className="scroll-indicator">↓</div>
            
            <div className="valentine-question-container">
              <h2 className="valentine-question">Will you be my Valentine?</h2>
              <div className="hero-actions">
                <button 
                  type="button" 
                  onClick={() => setIsAccepted(true)}
                >
                  Yes 💖
                </button>
                <button 
                  type="button" 
                  className="ghost"
                  style={noBtnStyle}
                  onMouseEnter={moveNoButton}
                  onTouchStart={moveNoButton}
                >
                  No
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="success-message">
            <h1 className="success-title">Yay! I knew it! 💖</h1>
            <p className="hero-text romantic-line success-text">
              You've made me the happiest person alive!
            </p>
            <div className="success-emojis">🥰💑🥰</div>
          </div>
        )}

        <div className="hero-actions letter-footer">
          <button type="button" onClick={onBack} className="ghost">
            Back
          </button>
        </div>
      </section>
    </main>
  )
}
