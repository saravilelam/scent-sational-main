import Header from "../components/Header"
import { H1, H2Subtitulo } from "../components/Texto"
import { Button_jogar } from "../components/Button"

export function Jogo() {
    return (
        <div className="bg-azul dark:bg-darkazul min-h-screen">
            <div className='p-3 bg-azul dark:bg-darkazul'></div>
            <Header  className="bg-white dark:bg-darkbg shadow-md "/>

            <div className="flex justify-center  mt-5">
                <H1  className="mb-6">Jogo</H1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20   items-center ">
                <section className="bg-white dark:bg-darkbg dark:text-white rounded-[30px] p-10 md:p-30 h-[550px] md:h-[542px] text-lg leading-relaxed">
                    <p>
                        No jogo R.E.M. o jogador irá em uma jornada por diferentes sonhos em cada fase. Cada uma representa um cenário onírico onde ele precisará passar por desafios, coletar itens e usar suas habilidades para passar de fase sem que o monstro o alcance, tornando sua missão ainda mais desafiadora. O objetivo é superar esses obstáculos para que no final consiga acordar dos sonhos, mostrando de forma lúdica a importância do autocuidado e da saúde mental.
                    </p>
                </section>


                <section className="flex flex-col items-center">
                    <img src="./src/assets/video.png" alt="Tumb do Vídeo"/>
                    <div className="mt-6">
                        <Button_jogar text="JOGAR" />
                    </div>
                </section>
            </div>
        </div>
    )
}
