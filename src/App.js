import logo from './logo.svg';
import './App.css';
import './components/Search/Search'
import Search from './components/Search/Search';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;
