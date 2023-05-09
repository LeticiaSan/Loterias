import { Route, Routes } from "react-router";
import {BrowserRouter } from "react-router-dom";
import Megasena from "../pages/Megasena";
import Quina from "../pages/Quina";
import Timemania from "../pages/Timemania";
import Menu from "../components/Menu";

function Rotas(){
    return(
        
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/timemania' element={<Timemania />} />
                <Route path='/megasena' element={<Megasena />} />
                <Route path='/quina' element={<Quina />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
