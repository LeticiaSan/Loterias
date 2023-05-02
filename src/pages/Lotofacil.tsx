import Lotofacil from "../components/Lotofacil";
import Menu from "../components/Menu";
import { useContexto } from "../hooks";

function PageLotofacil() {
    const { lotofacil } = useContexto();
    return (
        <>
            {lotofacil.numeroDoConcurso ?
                <>
                <div><Menu/></div>
                <div><Lotofacil /></div>
                </>
                :
                <div id="carregando"> Carregando... </div>
            }
        </>
    )
}

export default PageLotofacil;