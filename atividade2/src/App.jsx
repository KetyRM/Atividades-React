import Header from './assets/componentes/Header'
import Aside from './assets/componentes/Aside'
import Footer from './assets/componentes/Footer'
import Camera from './assets/imagens/Camera.png'

import './App.css'

function App() {
  return (
    <main>

      <Header />
      <Aside /> 
      <Footer />

      <img src={Camera} alt="Camera" />
     
    </main>
  )
}

export default App
