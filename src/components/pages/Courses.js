import React, { useState } from 'react'

export const Courses = () => {
  const [prueba, setPrueba] = useState(3)
  return (
    <div className = "ed-grid">
      <h1>Courses</h1>
      <p>{prueba}</p>
    </div>
  )
}
