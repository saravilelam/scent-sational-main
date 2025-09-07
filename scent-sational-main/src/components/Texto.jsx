export function H1({ children, className = "" }) {
    return (
        <h1 className={`font-[noticia-text] font-bold text-[32px] md:text-[50px] text-azulescuro dark:text-white ${className}`}>
            {children}
        </h1>
    );
}

export function H2({ children, className = "" }) {
    return (
        <h2 className={`font-sans [font-normal] text-[30px] md:text-[48px] ${className}`}>
            {children}
        </h2>
    );
}

export function H2SubtituloBtn({ children, className = "" }) {
    return (
        <h2 className={`font-sans [font-normal]  font-bold text-[20px] md:text-[24px] dark:text-white  ${className}`}>
            {children}
        </h2>
    );
}

export function H2Subtitulo({ children, className = "" }) {
    return (
        <h2 className={`font-sans [font-normal] text-[20px] md:text-[24px] dark:text-white  ${className}`}>
            {children}
        </h2>
    );
}

export function P({ children, className = "" }) {
    return (
        <p className={`font-sans [font-normal] text-[14px] md:text-[16px] ${className}`}>
            {children}
        </p>
    );
}
