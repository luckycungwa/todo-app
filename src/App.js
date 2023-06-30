import './App.css';
import AddItem from './comp/AddItem';
import Home from './comp/Home';
import ItemList from './comp/ItemList';
import Login from './comp/Login';
import Menu from './comp/Menu';
import Signin from './comp/Signin';

function App() {
  return (
    <div className="bg">
      <header className="cover main">
      <Menu/>

        <Home/>
      </header>
    </div>
  );
}

export default App;
