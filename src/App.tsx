import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export const App = () => {
  return (
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/details' element={<About />} />
    </Routes>
  )
}
