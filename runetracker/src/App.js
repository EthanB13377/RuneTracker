import './App.css';
import SearchChar from './components/buttons/SearchCharacter/searchChar';
import Header from './components/header/Header';
import BoxGrid from './components/boxes/BoxGrid';

function App() {
  return (
    <div className="App">
      <header>
        <Header title="Rune Tracker" />
      </header>
      <h2>Provides you with the tools to reach 2277!</h2>
      <div className='content'>
          <SearchChar />
          <p>There is many tools out there on the internet. But nothing that allows you to plan
            how you want to build your account with reccomendations and links to tutorials available. </p>

           <p> Calculators to provide you with up to date expectations of what you can expect during your long
            grinds
          </p>
          <BoxGrid />
      </div>
    </div>
  );
}

export default App;
