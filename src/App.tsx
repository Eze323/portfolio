import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1>Home - Portfolio A. Ezequiel Irace</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          cuenta clicks {count}
        </button>
        <p>
          Aca voy a realizar mi portfolio para agregar a mi cv
        </p>
      </div>
      <p className="read-the-docs">
        Si queres conocer mas de mi ingresa a mis proyectos
      </p>
    </>
  )
}

export default App
