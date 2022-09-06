
import './App.css'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import { Route, Routes } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails'

function App() {


    return (
        <div className="App">
            <Routes>
                <Route className="home" path="/" element={<Home />} />
                {/* //Ruta protegida */}
                <Route element={<ProtectedRoutes />}>
                    <Route path="/pokedex" element={<Pokedex/>} />
                    <Route path='/pokedex/:name' element={<PokemonDetails />}/>
                </Route>

            </Routes>
        </div>
    )
}

export default App
