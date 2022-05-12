import './App.css';

//importação do componente, aula 22
import ComponenteUm from "./components/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois";
import ComponenteAvoA from "./components/comunicacao_direta/ComponenteAvoA";


function App() {
  return (
    <div className="App">

      <ComponenteAvoA/>
      
      <ComponenteUm/>
      <ComponenteDois/>
    </div>
  );
}

export default App;
