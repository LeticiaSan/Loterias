import { ResultadoContextProvider } from './contexts';
import Rotas from './rotes';



function App() {
  return (
    <ResultadoContextProvider>
        <Rotas />
    </ResultadoContextProvider>
  );
}

export default App;