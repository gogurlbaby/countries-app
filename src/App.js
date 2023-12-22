import { useContext } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { ContextTheme } from './context/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetail from './components/CountryDetail';

function App() {
  const { darkTheme } = useContext(ContextTheme)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <NavBar />
          <div className={`${ 
          darkTheme ? "bg-[#202C36]" : "bg-white"} 
          App md:pt-6 md:pb-11 md:px-20 pt-8 pb-16 px-4`}>
          <SearchBar />
          <CountriesList />
          </div>
        </>} />
        <Route path="/country/:countryName" element={<>
          <NavBar />
          <div className={`${ 
          darkTheme ? "bg-[#202C36]" : "bg-white"} 
          App md:pt-6 md:pb-11 md:px-20 pt-8 pb-16 px-4`}>
          <CountryDetail />
          </div>
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
