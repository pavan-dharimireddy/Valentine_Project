import React, { useState, useRef } from 'react'
import OpenLoveLetter from './OpenLoveLetter'
import PlanDate from './PlanDate'
import backgroundMusic from '../assets/audio.mp3'


const HEARTS = Array.from({ length: 12 }, (_, index) => index)
const PHOTOS = [
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=80',
  'https://images.pexels.com/photos/6478814/pexels-photo-6478814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvdmV8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1581938165093-050aeb5ef218?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHZhbGVudGluZXxlbnwwfHwwfHx8MA%3D%3D'
]

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false)
      const [showLoveLetter, setShowLoveLetter] = useState(false)
      const [showPlanDate, setShowPlanDate] = useState(false)
      const audioRef = useRef(null)
    
      const toggleMusic = async () => {
        if (!audioRef.current) {
          return
        }
    
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
          return
        }
    
        try {
          await audioRef.current.play()
          setIsPlaying(true)
        } catch {
          setIsPlaying(false)
        }
      }

  return (
    <>
      <audio ref={audioRef} 
      loop 
      src={backgroundMusic} />
      {showLoveLetter ? (
        <OpenLoveLetter onBack={() => setShowLoveLetter(false)} />
      ) 
      : showPlanDate ? (
        <PlanDate onBack={() => setShowPlanDate(false)} />
      ) 
      : (
        <main className="valentine-page">
          <div className="floating-hearts" aria-hidden="true">
            {HEARTS.map((heart) => (
              <span key={heart} style={{ '--i': heart }} />
            ))}
          </div>
    
          <section className="hero">
            <p className="tag">Happy Valentine&apos;s Day</p>
            <h1>For The One Who Makes Every Day Feel Like Spring</h1>
            <p className="hero-text romantic-line">
              You are my favorite chapter, my warmest memory, and my brightest
              tomorrow.
            </p>
            <div className="hero-actions">
              <button type="button" onClick={() => setShowLoveLetter(true)}>
                Open Love Letter
              </button>
              <button
                type="button"
                className="ghost"
                onClick={() => setShowPlanDate(true)}
              >
                Plan Date Night
              </button>
              <button type="button" className="music-btn" onClick={toggleMusic}>
                {isPlaying ? 'Pause Music' : 'Play Music'}
              </button>
            </div>
          </section>
    
         
    
          <section className="timeline">
            <h2>Our Love Story</h2>
            <p className="romantic-line romantic-line-small" >
                Started with a message
            </p>
            <div className="timeline-row">
              <span>Then</span>
              <p className="romantic-line romantic-line-small">
                We met and everything changed.
              </p>
            </div>
            <div className="timeline-row">
              <span>Now</span>
              <p className="romantic-line romantic-line-small">
                We build little joys into unforgettable days.
              </p>
            </div>
            <div className="timeline-row">
              <span>Always</span>
              <p className="romantic-line romantic-line-small">
                Side by side, hand in hand.
              </p>
            </div>
          </section>
    
          <section className="gallery">
            <h2>Memory Gallery</h2>
            <p className="romantic-line romantic-line-small">
              Snapshots of love, laughter, and the little moments we treasure.
            </p>
            <div className="gallery-grid">
              {PHOTOS.map((photo, index) => (
                <figure className="gallery-item" key={photo}>
                  <img src={photo} alt={`Valentine memory ${index + 1}`} loading="lazy" />
                </figure>
              ))}
            </div>
          </section>
        </main>
      )}
    </>
  )
}
