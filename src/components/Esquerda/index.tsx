import { Props } from "../../types/index";
import Estimativa from "../Estimativa/index";
import NomeLoteria from "../NomeLoteria/index";
import { Div } from "./styleEsquerda";

interface EsquerdaProps {
    resultado: Props,
    logo: string
}

export default function Esquerda(props: EsquerdaProps) {

    return (
        <Div>
            <NomeLoteria loteria={props.resultado.tipoJogo.toUpperCase()} logo={props.logo}/>
            <Estimativa dataProximoConcurso={props.resultado.dataProximoConcurso} estimativaProximoConcurso={props.resultado.valorEstimadoProximoConcurso} />
        </Div>
    )
}