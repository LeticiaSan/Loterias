import { Div, Texto, ValorEstimado } from "./styleEstimativa";

interface EstimativaProps {
    dataProximoConcurso: string,
    estimativaProximoConcurso: number
}

export default function Estimativa(props: EstimativaProps) {

    function geraValorLocalizado() {
        return `R$ ${props.estimativaProximoConcurso.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 0 })},00`
    }

    function textoEstimativa() {
        return `Estimativa do prêmio do próximo concurso. Sorteio em ${props.dataProximoConcurso}:`
    }

    return (
        <Div>
            <Texto>{textoEstimativa()}</Texto>
            <ValorEstimado>{geraValorLocalizado()}</ValorEstimado>
        </Div>
    )
}