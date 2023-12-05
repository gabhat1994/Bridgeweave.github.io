import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Counter } from './Counter'
import About from './pages/About'
import Home from './pages/Home'

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/details' element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}
