import { H2Subtitulo, H2SubtituloBtn, P } from "../components/Texto.jsx"
import Header from "../components/Header"
import homeImg from "../assets/home.png"
import alvo from "../assets/alvo.png"
import alvodark from "../assets/alvodark.png"
import saude from "../assets/saude.png"
import saudedark from "../assets/saudedark.png"
import aroma from "../assets/aroma.png"
import aromadark from "../assets/aromadark.png"
import { useTema } from "../context/Theme"

export function Home() {
  const { tema } = useTema()

  return (
    <div className="bg-azul dark:bg-darkazul dark:text-white text-azulescuro h-screen flex flex-col ">
      <Header className="bg-azul dark:bg-darkazul shadow-none top-15" Titulo/>

      <div className="flex-1 flex flex-col md:flex-row">

        <main className="flex-1 flex flex-col justify-center items-center md:items-start px-6 md:px-16 gap-4 ">
          <h1 className="font-[noticia-text] font-normal text-[40px] md:text-[90px] text-center md:text-left">SCENT – SATIONAL THERAPY</h1>
          <H2Subtitulo className="text-center md:text-left"> Experimente relaxamento e foco de uma nova maneira com nosso difusor de 3 aromas</H2Subtitulo>

          <div className="flex justify-center md:justify-start w-full mt-3 mb-2 md:mb-0">
            <button className="bg-marrom hover:bg-[#6d514d] rounded-full p-3 md:p-5 max-w-[250px] w-full md:w-auto cursor-pointer">
              <H2SubtituloBtn className="text-white">BAIXE O APP</H2SubtituloBtn>
            </button>
          </div>
        </main>

        <div className="flex-1 flex justify-center md:justify-end items-center px-6 md:px-0">
          <img src={homeImg} alt="Imagem inicial" className="max-h-full w-auto object-contain"/>
        </div>
      </div>

      <section className="bg-white dark:bg-darkbg flex-1 flex flex-col md:flex-row justify-around items-center px-6 md:px-16 gap-8 md:gap-0 pb-7 pt-7">
        <div className="flex flex-col items-center text-center max-w-[300px]">
          <img src={tema === "light" ? alvo : alvodark} alt="Alvo" className="h-22 mb-4"/>
          <P>Promover bem-estar, foco e relaxamento unindo tecnologia e aromaterapia.</P>
        </div>

        <div className="flex flex-col items-center text-center max-w-[300px]">
          <img src={tema === "light" ? saude : saudedark} alt="Saúde" className="h-22 mb-4"/>
          <P>Para quem busca qualidade de vida, bem-estar, relaxamento e foco no dia a dia.</P>
        </div>

        <div className="flex flex-col items-center text-center max-w-[300px]">
          <img src={tema === "light" ? aroma : aromadark} alt="Aroma" className="h-22 mb-4"/>
          <P>Escolha, ative e controle seus aromas. Bem-estar inteligente, do seu jeito, no seu tempo.</P>
        </div>
      </section>

    </div>
  )
}
