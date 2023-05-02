import { Route, Routes } from "react-router";
import {BrowserRouter} from "react-router-dom";
import Megasena from "../pages/Megasena";
import Lotofacil from "../pages/Lotofacil";
import Quina from "../pages/Quina";
import Principal from "../pages/Principal";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal/>} />
                <Route path="/megasena" element={<Megasena/>} />
                <Route path="/lotofacil" element={<Lotofacil/>} />
                <Route path="/quina" element={<Quina/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
