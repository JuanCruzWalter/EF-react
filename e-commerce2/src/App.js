import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer saludo="vienvenido a la tienda RKT"/>
        <ItemCount/>
    </div>
  );
}

export default App;
