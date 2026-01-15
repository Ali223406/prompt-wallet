import logo from './logo.svg';
import './App.css';
import { signup } from './services/firebaseAuth'
function App() { 
  const createuser =(e) => {
    e.preventDefault();
    signup('ali@gmail.com','123');


  }

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={createuser}>
        <button>Ajouter un user</button>
      </form>
      </header>
    </div>
  );
}

export default App;
