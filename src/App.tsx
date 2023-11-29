import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'

function App() {


  return (
    <section className=' '>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </section>

  )
}

export default App
