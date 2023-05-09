import { DataDiv } from "./styleData";

interface DataProps {
    numeroDoConcurso: number,
    dataPorExtenso: string
}

export default function Data(props: DataProps) {

    function concursoComDataPorExtenso() {

        return `Concurso ${props.numeroDoConcurso} - ${props.dataPorExtenso}`
    }

    return (
        <DataDiv>{concursoComDataPorExtenso()}</DataDiv>
    )
}