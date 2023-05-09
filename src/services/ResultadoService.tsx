import { Props } from "../types/index";
import api from "./api";

const MEGA_SENA = "megasena"
const TIMEMANIA = "timemania"
const QUINA = "quina"

class ResultadosService {
    private async get(tipoJogo: string): Promise<Props> {
        const { data } = await api.get("/");
        return data[`${tipoJogo}`];
    }

    async getUltimoResultadoQuina(): Promise<Props> {
        return this.get(QUINA);
    }

    async getUltimoResultadoMegaSena(): Promise<Props> {
        return this.get(MEGA_SENA);
    }

    async getUltimoResultadoTimemania(): Promise<Props> {
        return this.get(TIMEMANIA);
    }
}

const resultadoService = new ResultadosService();
export default resultadoService;