import { useContexto } from "../../hooks";
import imagemTrevo from '../../assets/trevo-megasena.png';

function Megasena(){

    const {megasena} = useContexto();
    return (
        <div id = "megasena"> 
            <table id="tabela-megasena">
                <tr>
                    <td><img className="logo" src={imagemTrevo}/> </td>
                    <td id="titulo_megasena">MEGA-SENA</td>
                    <td className="coluna-dezenas">{megasena.dezenas.map((dezenas, index)=>(        
                        <td id = "dezenas">{dezenas}</td> 
                    ))}</td>
                </tr>
                <tr>
                    <td> </td>
                    <td id="estimativa-megasena">Estimativa do prêmio do próximo concurso. Sorteio em {megasena.dataProximoConcurso}:</td>
                    <td className="coluna-dezenas" id="acumulou-megasena">{megasena.acumulado ? "ACUMULOU!": "Não Acumulado"}</td>
                </tr>
                <tr>
                    <td> </td>
                    <td id = "valor-concurso-megasena">{megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td className="coluna-dezenas" id = "concurso-megasena">Concurso {megasena.numeroDoConcurso} • {megasena.dataPorExtenso}</td>                   
                </tr>
           </table>
           <hr id="linha-marcacao"/>
        </div>
    )
}

export default Megasena;