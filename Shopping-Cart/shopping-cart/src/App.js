// import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import data from'./data';

function App() {
  const { products } = data;
  return (
    <div className="App">
      <div>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
