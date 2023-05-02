import { useContexto } from "../../hooks";
import imagemTrevo from '../../assets/trevo-quina.png';

function Quina(){

    const {quina} = useContexto();
    return (
        <div id = "quina"> 
            <table id="tabela-quina">
                <tr>
                    <td><img className="logo" src={imagemTrevo}/> </td>
                    <td id="titulo_quina">QUINA</td>
                    <td className="coluna-dezenas">{quina.dezenas.map((dezenas, index)=>(        
                        <td id = "dezenas_quina">{dezenas}</td> 
                    ))}</td>
                </tr>
                <tr>
                    <td> </td>
                    <td id="estimativa-quina">Estimativa do prêmio do próximo concurso. Sorteio em {quina.dataProximoConcurso}:</td>
                    <td className="coluna-dezenas" id="acumulou-quina">{quina.acumulado ? "ACUMULOU!": "Não Acumulado"}</td>
                </tr>
                <tr>
                    <td> </td>
                    <td id = "valor-concurso-quina">{quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td className="coluna-dezenas" id = "concurso-quina">Concurso {quina.numeroDoConcurso} • {quina.dataPorExtenso}</td>                   
                </tr>
           </table>
           <hr id="linha-marcacao"/>
        </div>
    )
}

export default Quina;