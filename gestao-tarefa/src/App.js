import logo from './logo.svg';
import './App.css';
import HelloWord  from './components/HelloWord'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'


function App() {
  return (
    <div className="App">
      <h1>Meu primeiro Projeto</h1>
      <HelloWord/>
      <SayMyName nome = "Ruan" />
      <SayMyName nome = "Felipe" />
      <Pessoa  nome = "Ruan Felipe" idade = "18" altura="1.92" />


    </div>
  );
}

export default App;
