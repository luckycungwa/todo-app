import './App.css';
import Home from './comp/Home';
import ItemList from './comp/ItemList';
import Login from './comp/Login';

function App() {
  return (
    <div className="">
      <header className="mainSection">
        <ItemList/>
      </header>
    </div>
  );
}

export default App;
