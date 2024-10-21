import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Cabecera } from './app/componentes/contenedor/Cabecera'
import { Ruteo } from './app/utilidades/rutas/Ruteo'

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecera/>
        
        <Ruteo/>
      </BrowserRouter>
    </>
  )
}

export default App
