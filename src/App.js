import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
        <Header/>
        <Router>
          <Routes>
            <Route />
          </Routes>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
