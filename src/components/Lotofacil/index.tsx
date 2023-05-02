import { useContexto } from "../../hooks";
import imagemTrevo from '../../assets/trevo-lotofacil.png';

function Lotofacil() {

    const { lotofacil } = useContexto();
    return (
        <div id="lotofacil">
            <table id="tabela-lotofacil">
                <tr>
                    <td><img className="logo" src={imagemTrevo} /> </td>
                    <td id="titulo_lotofacil">LOTOFÁCIL</td>
                </tr>
                <tr>
                    <td> </td>
                    <td id="estimativa-lotofacil">Estimativa do prêmio do próximo concurso. Sorteio em {lotofacil.dataProximoConcurso}: 
                        <tr id="valor-concurso-lotofacil">{lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</tr>
                    </td>
                    <td>
                        {lotofacil.dezenas.reduce((rows: string[][], dezena, index) => {
                            if (index % 5 === 0) rows.push([]);
                            rows[rows.length - 1].push(dezena);
                            return rows;
                        }, []).map((row, rowIndex) => (
                            <>
                                <tr key={rowIndex}>
                                    {row.map((dezena, index) => (
                                        <td key={index} id="dezenas-lotofacil">{dezena}</td>
                                    ))}
                                </tr>
                                <hr id="linha-marcacao" />
                            </>
                        ))}
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td id="ganhadores-lotofacil">{lotofacil.quantidadeGanhadores} GANHADORES</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td id="concurso-lotofacil">Concurso {lotofacil.numeroDoConcurso} • {lotofacil.dataPorExtenso}</td>
                </tr>
            </table>
            <hr id="linha-marcacao" />
        </div>
    )
}

export default Lotofacil;