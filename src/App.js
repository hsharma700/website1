import './App.css';
import Main from "./components/Main";
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
