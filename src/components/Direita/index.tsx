import { Props } from "../../types/index";
import Acumulou from "../Acumulou/index";
import Data from "../Data/index";
import Resultado from "../Resultado/index";
import { Div } from "./styleDireita";

interface DireitaProps {
    resultado: Props
}

export default function Direita(props: DireitaProps) {

    return (
        <Div>
            <Resultado dezenas={props.resultado.dezenas} />
            <Acumulou isAcumulado={props.resultado.acumulado}/>
            <Data numeroDoConcurso={props.resultado.numeroDoConcurso} dataPorExtenso={props.resultado.dataPorExtenso}/>
        </Div>
    )
}