import { useContext } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { ContextTheme } from './context/ThemeContext';

function App() {
  const { darkTheme } = useContext(ContextTheme)
  return (
    <div className="App">
     <NavBar />
     <div className={`${ 
      darkTheme ? "bg-[#202C36]" : "bg-white"} 
      App md:pt-6 md:pb-11 md:px-20 pt-8 pb-16 px-4`}>
     <SearchBar />
     <CountriesList />
     </div>
    </div>
  );
}

export default App;
