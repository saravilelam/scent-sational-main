import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import {  H2Subtitulo } from "../components/Texto"
import { useTema } from "../context/Theme"
import temalight from "../assets/temalight.png"
import temadark from "../assets/temadark.png"
import menuiconlight from "../assets/menuiconlight.png"
import menuicon from "../assets/menuicon.png"


export default function Header({ className = "", Titulo = false }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const { tema, alterarTema } = useTema()

    return(
        <header className={`w-full flex items-center justify-between px-6 py-3 md:py-4 pt-6 ${className}`}>
            
            <div className="flex items-center gap-15">
                <Link to="/"><img src={logo} alt="logo" className="h-[57px] md:h-[95px]" /></Link>
            

                <div className="hidden md:flex items-center gap-10 dark:text-white  text-azulescuro">
                    <H2Subtitulo><Link to="/manual" className="hover:underline">Manual</Link></H2Subtitulo>
                    <H2Subtitulo><Link to="/produtos" className="hover:underline">Produtos</Link></H2Subtitulo>
                    <H2Subtitulo><Link to="/quem-somos" className="hover:underline">Quem Somos ?</Link></H2Subtitulo>
                    <H2Subtitulo><Link to="/referencias" className="hover:underline">Referências</Link></H2Subtitulo>
                    <H2Subtitulo><Link to="/jogo" className="hover:underline">Jogo</Link></H2Subtitulo>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <img src={tema === "light" ? temalight  : temadark} alt="Alterar tema" onClick={alterarTema} className="h-5 cursor-pointer"/>
            </div>

            {!Titulo&& (
                <div className='md:hidden flex flex-col justify-center items-center gap-1 text-azulescuro dark:text-white'>
                <h1 className="font-[noticia-text] font-normal text-[22px] md:text-[36px] leading-none">SCENT-SATIONAL</h1>
                <h2 className="font-[noticia-text] font-normal text-[14px] md:text-[22px] leading-none mb-4">THERAPY</h2>
                </div>
            )}

            <button className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
                <img src={menuiconlight} alt="Menu" className="h-6 w-6 hidden dark:block  "/>
                <img src={menuicon} alt="Menu" className="h-6 w-6 dark:hidden" />
            </button>
            

            {menuOpen && (
                <div className="  md:hidden absolute top-22 right-1 mt-2 bg-azul dark:bg-darkazul shadow-lg rounded-lg p-4 flex flex-col gap-2 z-50">
                    
                    <nav className="gap-10 dark:text-white  text-azulescuro">
                        <H2Subtitulo><Link to="/manual" className="hover:underline">Manual</Link></H2Subtitulo>
                        <H2Subtitulo><Link to="/produtos" className="hover:underline">Produtos</Link></H2Subtitulo>
                        <H2Subtitulo><Link to="/quem-somos" className="hover:underline">Quem somos ?</Link></H2Subtitulo>
                        <H2Subtitulo><Link to="/referencias" className="hover:underline">Referências</Link></H2Subtitulo>
                        <H2Subtitulo><Link to="/jogo" className="hover:underline">Jogo</Link></H2Subtitulo>
                    </nav>

                    <div className="mt-3 mb-3 flex justify-center items-center gap-4">
                        <img src={tema === "light" ? {temalight} :temadark} alt="Alterar tema" onClick={alterarTema} className="h-5 cursor-pointer"/>
                    </div>
                </div>
                
            )}
        </header>
    )
}