import { Link } from "react-router-dom"
import Header from "../components/Header"
import { H1, H2, H2Subtitulo, H2SubtituloBtn } from "../components/Texto"

export function QuemSomos() {
    return (
        <div className="bg-azul dark:bg-darkazul min-h-screen">
            <div className='p-3 bg-azul dark:bg-darkazul'></div>
            <Header  className="bg-white dark:bg-darkbg shadow-md "/>

            <div className="flex flex-col items-center px-4 md:px-8 py-6">
                <H1 className="mb-6">Quem somos?</H1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col items-center">
                        <img src="./src/assets/bianca.png" alt="Foto da Bianca"  />
                        <H2 className="text-azulescuro dark:text-white">Bianca</H2>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="./src/assets/giulia.png" alt="Foto da Giulia"  />
                        <H2 className="text-azulescuro dark:text-white">Giulia</H2>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="./src/assets/sara.png" alt="Foto da Sara"  />
                        <H2 className="text-azulescuro dark:text-white">Sara</H2>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="./src/assets/victoria.png" alt="Foto da Victoria" />
                        <H2 className="text-azulescuro dark:text-white">Victoria</H2>
                    </div>
                </div>    
            </div>
            <div>
                <div className="flex flex-col md:flex-row w-full max-h-[466px] shadow dark:text-white">
                    <div className="w-full md:w-4/10 bg-white dark:bg-darkbg p-10 md:p-10 flex flex-col justify-between ">
                        <div className="flex flex-col justify-center items-center gap-1 text-azulescuro dark:text-white">
                            <h1 className="font-[noticia-text] font-normal text-[22px] md:text-[36px] leading-none">SCENT-SATIONAL</h1>
                            <h2 className="font-[noticia-text] font-normal text-[14px] md:text-[22px] leading-none mb-4">THERAPY</h2>
                        </div>

                        <div className="flex flex-col gap-1 text-azulescuro">
                            <H2Subtitulo><Link to="/manual" className="hover:underline">Manual</Link></H2Subtitulo>
                            <H2Subtitulo><Link to="/produtos" className="hover:underline">Produtos</Link></H2Subtitulo>
                            <H2Subtitulo><Link to="/quem-somos" className="hover:underline">Quem somos ?</Link></H2Subtitulo>
                            <H2Subtitulo><Link to="/referencias" className="hover:underline">Referências</Link></H2Subtitulo>
                            <H2Subtitulo><Link to="/jogo" className="hover:underline">Jogo</Link></H2Subtitulo>
                        </div>

                        <H2Subtitulo className="flex justify-end">scent-sational@gmail.com</H2Subtitulo>
                    </div>

                    <div className="w-full md:w-7/10 bg-azulzinho p-6 md:p-10 flex flex-col justify-center items-center">
                        <div className="w-full  flex flex-col gap-3">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input type="text" placeholder="Nome" className="flex-1 bg-white dark:bg-darkbg rounded-lg p-3"/>
                                <input type="text" placeholder="Sobrenome" className="flex-1 bg-white dark:bg-darkbg  rounded-lg p-3"/>
                            </div>

                            <input type="email" placeholder="Digite seu e-mail" className="bg-white dark:bg-darkbg  rounded-lg p-3"/>
                            <textarea type="text" placeholder="Assunto" className="bg-white dark:bg-darkbg rounded-lg p-3"/>

                            <button className="bg-marrom text-white rounded-lg p-3 hover:opacity-90 transition">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
