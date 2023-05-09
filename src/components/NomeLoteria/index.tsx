import { Div, Logo, Titulo } from "./styleNomeLoteria";

interface NomeLoteriaProps {
    loteria: string,
    logo: string
}

export default function NomeLoteria(props: NomeLoteriaProps) {

    return (
        <Div>
            <Logo src={props.logo} />
            <Titulo>{props.loteria.replace("_", "-")}</Titulo>
        </Div>
    )
}