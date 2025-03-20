import { useState } from 'react'

import MovieBooking from './components/MovieBooking'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    < MovieBooking />
   </div>
  )
}

export default App
