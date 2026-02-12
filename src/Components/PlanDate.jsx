import React, { useState } from 'react'

export default function PlanDate({ onBack }) {
  const [formData, setFormData] = useState({
    restaurantName: '',
    date: '',
    time: '',
    place: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="valentine-page">
      <section className="hero">
        <p className="tag">Plan Date Night</p>
        <h1>Let&apos;s Plan Something Special</h1>
        <form className="date-form plan-form-shell" onSubmit={handleSubmit}>
          <p className="form-kicker">Date Planner</p>

          <div className="form-field">
            <label htmlFor="restaurantName">Restaurant Name</label>
            <input
              id="restaurantName"
              name="restaurantName"
              type="text"
              value={formData.restaurantName}
              onChange={handleChange}
              placeholder="Example: Olive Garden"
              required
            />
          </div>

          <div className="date-form-grid">
            <div className="form-field">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="time">Time</label>
              <input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="place">Place</label>
            <input
              id="place"
              name="place"
              type="text"
              value={formData.place}
              onChange={handleChange}
              placeholder="City / Address"
              required
            />
          </div>

          <div className="hero-actions form-actions">
            <button type="submit" className="save-plan-btn">Save Plan</button>
            <button type="button" className="ghost back-btn" onClick={onBack}>
              Back
            </button>
          </div>
        </form>

        {isSubmitted && (
          <div className="plan-summary">
            <p className="hero-text">
              Date planned at {formData.restaurantName} on {formData.date} at{' '}
              {formData.time}, {formData.place}.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
