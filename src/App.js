import './App.css';
import AddItem from './comp/AddItem';
import Home from './comp/Home';
import ItemList from './comp/ItemList';
import Login from './comp/Login';
import Signin from './comp/Signin';

function App() {
  return (
    <div className="bg">
      <header className="cover main">
        <AddItem/>
      </header>
    </div>
  );
}

export default App;
