import { useState } from 'react'
import uptimeKumaLogo from '/uptimeKumaLogo.png'
import homeLab from '/homelab.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={homeLab} className="logo" alt="homeLab Graphic" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={uptimeKumaLogo} className="logo react" alt="Uptime Kuma Logo" />
        </a>
      </div>
      <h1>Fegnet.uk!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Button presses: {count}
        </button>
      </div>
      <p className="read-the-docs">
        this is a temp page for the Fegnet.uk Network!
      </p>
    </>
  )
}

export default App
