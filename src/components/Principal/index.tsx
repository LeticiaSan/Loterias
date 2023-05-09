import { Props } from "../../types/index";
import Direita from "../Direita/index";
import Esquerda from "../Esquerda/index";
import { Container } from "./stylePrincipal";

interface PrincipalProps {
    resultado: Props,
    logo: string
}

export default function Principal(props: PrincipalProps) {

    return (
        <Container>
            <Esquerda resultado={props.resultado} logo={props.logo} />
            <Direita resultado={props.resultado} />
        </Container>
    )
}