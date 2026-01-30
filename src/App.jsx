
import './css/App.css'
import MovieCard from './component/MovieCard'
import Favorite from './pages/Favorite'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext.jsx'
import Navbar from './component/Navbar.jsx'

function App() {
  
  return (
    <>
    <MovieProvider>

      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
    </>
  )
}



export default App
