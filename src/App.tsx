import { ContextoProvider } from "./contexts/Contexto";
import Rotas from "./rotes";

function App() {
  return <ContextoProvider><Rotas /></ContextoProvider> 
}

export default App;
