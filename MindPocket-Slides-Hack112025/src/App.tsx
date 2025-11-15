import { useState, useEffect } from 'react'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'
import Slide8 from './slides/Slide8'
import Slide9 from './slides/Slide9'
import Slide10 from './slides/Slide10'
import Slide11 from './slides/Slide11'
import Slide12 from './slides/Slide12'
import Slide13 from './slides/Slide13'

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11, Slide12, Slide13
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Right') nextSlide()
      if (e.key === 'ArrowLeft' || e.key === 'Left') prevSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <CurrentSlideComponent />
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 glass-card px-4 py-2 rounded-lg text-sm text-muted-foreground">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}

export default App
