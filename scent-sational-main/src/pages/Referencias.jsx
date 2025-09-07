import { Link } from "react-router-dom"
import Header from "../components/Header"
import { H1, H2Subtitulo, H2SubtituloBtn } from "../components/Texto"

export function Referencias() {
    return (
        <div className="bg-azul dark:bg-darkazul min min-h-screen">
            <div className='p-3 bg-azul dark:bg-darkazul'></div>
            <Header  className="bg-white dark:bg-darkbg shadow-md "/>

            <div className="flex flex-col items-center px-4 md:px-8 py-4">
                <H1 className="mb-6">Referências</H1>

                <section className="bg-white dark:bg-darkbg rounded-[30px] p-6 md:p-15 w-full max-w-[1138px]">
                    <H2Subtitulo>
                        Estudos apontam que o óleo essencial de alecrim pode ajudar na redução de estresse e ansiedade,
                        como observado em discentes de Odontologia expostos à aromaterapia com essa substância (BOGÉA, 2023).{" "}
                        <Link to="https://scholar.google.com.br/scholar?hl=pt-BR&as_sdt=0%2C5&q=efeitos+dos+%C3%B3leos+essenciais+de+alecrim+em+discentes+de+odontologia+de+uma+universidade+federal&btnG=#d=gs_qabs&t=1739537150400&u=%23p%3DbPKj7p3Rqb4J" className="hover:underline cursor-pointer">
                            <H2SubtituloBtn className="text-azulescuro">Clique Aqui</H2SubtituloBtn>
                        </Link>
                    </H2Subtitulo>

                    <br />

                    <H2Subtitulo>
                        Lyra, Cassandra Santantonio et al. (2010) avaliaram a eficácia da aromaterapia na redução do estresse e ansiedade em estudantes da saúde.{" "}
                        <Link to="https://www.scielo.br/j/fp/a/B6dQHXr4YVbvdvLzPXRf3jN/" className="hover:underline cursor-pointer">
                            <H2SubtituloBtn className="text-azulescuro">Clique Aqui</H2SubtituloBtn>
                        </Link>
                    </H2Subtitulo>

                    <br />

                    <H2Subtitulo>Avaliação da eficácia da aromaterapia na redução do estresse e ansiedade em estudantes universitários da área da saúde.{" "}
                        <Link to="https://bjihs.emnuvens.com.br/bjihs/article/view/1462/1639" className="hover:underline cursor-pointer">
                            <H2SubtituloBtn className="text-azulescuro">Clique Aqui</H2SubtituloBtn>
                        </Link>
                    </H2Subtitulo>

                    <br />

                    <H2Subtitulo>
                        A principal contribuição do trabalho é o desenvolvimento de um protótipo automatizado, baseado em Arduino, capaz de monitorar e controlar a umidade do ar em ambientes climatizados, promovendo maior conforto térmico e bem-estar aos usuários.{" "}
                        <Link to="https://bjihs.emnuvens.com.br/bjihs/article/view/1462/1639" className="hover:underline cursor-pointer">
                            <H2SubtituloBtn className="text-azulescuro">Clique Aqui</H2SubtituloBtn>
                        </Link>
                    </H2Subtitulo>
                </section>
            </div>
        </div>
    )
}
