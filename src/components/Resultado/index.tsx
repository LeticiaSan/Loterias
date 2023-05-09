import { Coluna, Dezenas, Label, Tabela } from "./styleResultado"

interface ResultadoProps {
    dezenas: string[]
}

export default function Resultado(props: ResultadoProps) {

    function renderDezenas() {
        return (
        <>
            {props.dezenas.map(num => {
                return (
                <>
                    <Dezenas>
                        <Label>{num}</Label>
                    </Dezenas>              
                </>
            )})}
        </>
        );
    };

    return (
        <Tabela>
            <Coluna>
                {renderDezenas()}
            </Coluna>
        </Tabela>
    )
}