import Header from "../components/Header"
import { H1, H2Subtitulo, H2SubtituloBtn } from "../components/Texto"

export function Produtos() {
    return (
        <div className="bg-azul dark:bg-darkazul min-h-screen">
            <div className='p-3 bg-azul dark:bg-darkazul'></div>
            <Header  className="bg-white dark:bg-darkbg shadow-md "/>

            <div className="flex flex-col items-center px-4 md:px-8 py-6">
                <H1 className="mb-6">Produtos Utilizados</H1>

                <div className="bg-azul dark:bg-darkazul border dark:border-white border-black-100 rounded-2xl p-6 w-full max-w-5xl">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="shadow p-4 flex flex-col items-center">
                            <img src="./src/assets/p1.png" alt="arduino" className="w-full h-auto" />
                            
                        </div>
                        <div className=" shadow p-4 flex flex-col items-center">
                            <img src="./src/assets/p2.png" alt="pinos" className="w-full h-auto" />
                            
                        </div>
                        <div className="shadow p-4 flex flex-col items-center">
                            <img src="./src/assets/p3.png" alt="Lcd" className="w-full h-auto" />
                            
                        </div>

                        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center sm:col-span-2 md:col-span-3">
                            <img src="./src/assets/p4.png" alt="LED" className="w-full h-auto max-w-sm" />
                            
                        </div>
                    </div>
                    

                    <section className="flex flex-wrap">
                        <div className=" mt-8 mb-3 sm:px-12 flex gap-2 ">
                            <H2SubtituloBtn>Valor Total:</H2SubtituloBtn> 
                            <H2Subtitulo>R$500</H2Subtitulo>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
