import { useState, useRef } from 'react'

import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Button from './components/Button'
import Coin from './components/Coin'

const App = () => {
  const coinRef = useRef(null)
  const [isFlipping, setIsFlipping] = useState(false)

  const flipCoin = () => {
    if (isFlipping) return // Evita múltiples clics mientras gira

    setIsFlipping(true)
    const coin = coinRef.current
    const isHeads = Math.random() < 0.5
    const angle = isHeads ? 1800 : 1980

    // Reset inmediato
    coin.style.transition = 'none'
    coin.style.transform = 'rotateY(0deg)'
    void coin.offsetWidth // forzar reflow

    // Lanzar después de un microdelay
    setTimeout(() => {
      coin.style.transition = 'transform 2s ease-out'
      coin.style.transform = `rotateY(${angle}deg)`
    }, 1)

    // Desbloquear después de la animación
    setTimeout(() => {
      setIsFlipping(false)
    }, 2000)
  }

  return (
      <>
        <section>
          <Title/>
          <Subtitle/>
        </section>
        <Coin ref={coinRef}/>
        <Button onClick={flipCoin} disabled={isFlipping}/>
      </>
  )
}

export default App
