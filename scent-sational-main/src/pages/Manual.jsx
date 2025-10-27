import final from "../assets/final.png"
import video from "../assets/video.png"
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { H1, H2Subtitulo, H2SubtituloBtn, P } from "../components/Texto"

export function Manual() {
    return (
        <div className="bg-azul  dark:bg-darkazul dark:text-white min-h-screen">
            <div className='p-3 bg-azul dark:bg-darkazul'></div>
            <Header  className="bg-white dark:bg-darkbg shadow-md "/>

            <div className="flex flex-col items-center px-4 md:px-8">
                <H1 className="mt-6 text-center  dark:text-white">Manual de Utilização do produto</H1>
                <H2Subtitulo className="mb-6 text-center text-azulescuro  dark:text-white">Passo a passo de utilização:</H2Subtitulo>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[980px]">
                    <div className="flex flex-col gap-4 ">
                        <section className="bg-white dark:bg-darkbg rounded-lg shadow p-4 flex flex-col gap-3 justify-center px-10">
                        <H2SubtituloBtn className='text-azulescuro  dark:text-white'>1. Preparação do dispositivo:</H2SubtituloBtn>
                        <P>✓ Posicione o difusor sobre uma superfície estável;</P>
                        <P>✓ Conecte o cabo de energia na porta USB.</P>
                        </section>

                        <section className="bg-white  dark:bg-darkbg  rounded-lg shadow p-4 flex flex-col gap-3 justify-center px-10 md:h-[150px] md:mb-2">
                        <H2SubtituloBtn className='text-azulescuro  dark:text-white'>3. Escolhendo o aroma:</H2SubtituloBtn>
                        <P>✓ No painel do dispositivo ou pelo aplicativo selecione o aroma que deseja, já programado ou personalizado.</P>
                        </section>

                        <section className="bg-white  dark:bg-darkbg  rounded-lg shadow p-4 flex flex-col gap-3 justify-center px-10">
                        <H2SubtituloBtn className='text-azulescuro  dark:text-white'>5. Desligando o difusor:</H2SubtituloBtn>
                        <P>✓ Pressione o botão ⏻ por 2 segundos até o LED apagar.</P>
                        </section>

                        <section className="bg-white  dark:bg-darkbg  rounded-lg shadow p-4 flex flex-col gap-3 justify-center px-10">
                        <H2SubtituloBtn className='text-azulescuro  dark:text-white'>Observações finais:</H2SubtituloBtn>
                        <P>✓ Uso recomendado em ambientes internos;</P>
                        <P>✓ Manter fora do alcance de crianças.</P>
                        </section>
                    </div>

                    <div className="flex flex-col gap-4">
                        <section className="bg-white  dark:bg-darkbg  rounded-lg shadow p-4 flex flex-col gap-3 justify-center px-10">
                            <H2SubtituloBtn className='text-azulescuro  dark:text-white'>2. Ligando o difusor:</H2SubtituloBtn>
                            <P>✓ Pressione o botão ⏻ power do dispositivo;</P>
                            <P>✓ O LED acende, indicando que o difusor está ligado.</P>
                        </section>

                        <section className="bg-white  dark:bg-darkbg  rounded-lg shadow p-6 flex flex-col gap-3 justify-center px-10 ">
                            <H2SubtituloBtn className='text-azulescuro  dark:text-white'>4. Ajuste de tempo e intensidade:</H2SubtituloBtn>
                            <P>✓ Para selecionar o tempo clique no painel a opção “TEMPO” faça sua escolha;</P>
                            <P className="ml-7">• 5,10,20 minutos ou contínuo.</P>
                            <P>✓ Para ajustar a intensidade clique no painel a opção “INTENSIDADE” e faça sua esccolha;</P>
                            <P className="ml-7">• 5,10,20 minutos ou contínuo.</P>
                        </section>

                        <section className="bg-white  dark:bg-darkbg  rounded-lg shadow p-4 flex flex-col gap-3 justify-center px-10">
                            <H2SubtituloBtn className='text-azulescuro  dark:text-white'>Limpeza e manutenção</H2SubtituloBtn>
                            <P>✓ Limpeza dos recipientes a cada uso </P>
                            <P>✓ Verifique e reabasteça os frascos quando necessário</P>
                        </section>
                    </div>
                </div>

                <section className="bg-azulzinho dark:bg-darkbg  rounded-[15px] w-full max-w-[980px] mt-8 mb-2 flex items-center justify-center px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        
                        <img src={final} alt="Projeto Final" className="md:h-[421px] h-[253px] object-contain"/>

                        <div className="flex items-center justify-center md:h-[220px] md:w-[320px] h-[137px] w-[220px] shadow-md">
                            <img src={video} alt="" className='rounded-[12px]'/>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
