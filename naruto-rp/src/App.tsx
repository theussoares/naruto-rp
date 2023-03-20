import { useState } from 'react'
import SignIn from './Components/Pages/Register'
import Router from './Routers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Router />
    </div>
  )
}

export default App
