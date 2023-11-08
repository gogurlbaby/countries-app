import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App md:pt-6 md:pb-11 md:px-20 pt-8 pb-16 px-4">
     <NavBar />
     <SearchBar />
     <CountriesList />
    </div>
  );
}

export default App;
