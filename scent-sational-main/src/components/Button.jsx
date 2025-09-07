import {H1, H2, H2Subtitulo, H2SubtituloBtn, P} from "./Texto"

export  function Button({ text }){
    return(
        <button className="bg-marrom hover:bg-[#6d514d] text-white rounded-[41px] h-[51px] md:h-[84px] w-[310px] md:w-[547px] shadow ">
            <H2SubtituloBtn>{text}</H2SubtituloBtn>
        </button>
    )
}

export function Button_jogar ({text}){
    return(
        <button className="bg-marrom hover:bg-[#6d514d] text-white rounded-[41px] h-[51px] md:h-[84px] w-[310px] md:w-[606px] shadow ">
            <H2SubtituloBtn>{text}</H2SubtituloBtn>
        </button>
    )
}
