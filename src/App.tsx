import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export const App = () => {
  return (
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/details/:id' element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
