import { createContext, useState, useEffect } from "react";
import { LoteriaProps, Props } from "../types/index";
import resultadoService from "../services/ResultadoService";

const ResultadoContext = createContext({} as LoteriaProps);

function ResultadoContextProvider({ children }: any) {
    const [megasena, setMegasena] = useState({} as Props);
    const [timemania, setTimemania] = useState({} as Props)
    const [quina, setQuina] = useState({} as Props)

    async function buscaJogosLoteria() {
        const megasenaResponse = await resultadoService.getUltimoResultadoMegaSena();
        const timemaniaResponse = await resultadoService.getUltimoResultadoTimemania();
        const quinaResponse = await resultadoService.getUltimoResultadoQuina();
    
        setMegasena(megasenaResponse);
        setTimemania(timemaniaResponse);
        setQuina(quinaResponse);
    }

    useEffect(() => {
        buscaJogosLoteria()
    }, []);

    return (
        <ResultadoContext.Provider value={{megasena, timemania, quina}}>
            {children}
        </ResultadoContext.Provider>
    );

}

export {ResultadoContext, ResultadoContextProvider};