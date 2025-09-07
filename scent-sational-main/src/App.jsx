import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Manual } from "./pages/Manual"
import { Produtos } from "./pages/Proudutos"
import { QuemSomos } from "./pages/QuemSomos"
import { Referencias } from "./pages/Referencias"
import { Jogo } from "./pages/Jogo"

export function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/manual" element={<Manual/>}/>
      <Route path="/produtos" element={<Produtos/>}/>
      <Route path="/quem-somos" element={<QuemSomos/>}/>
      <Route path="/referencias" element={<Referencias/>}/>
      <Route path="/jogo" element={<Jogo/>}/>
    </Routes>
  )
}