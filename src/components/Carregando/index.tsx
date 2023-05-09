import { Div } from "./styleCarregando";

interface CarregandoProps {
    isCarregando: boolean
}

export default function Carregando(props: CarregandoProps) {

    function renderCarregando() {

        return (
            <Div> Carregando...</Div>
        )
    }
    return (
        <>
            {props.isCarregando && renderCarregando()}
        </>
    )
}