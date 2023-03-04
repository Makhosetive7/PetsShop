
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddNewDog from './Pages/AddNewDog';
import LandingPage from './Pages/LandingPage';





function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path="/addnewdog" element={<AddNewDog/>} />
      </Routes>
    </div>
  );
}

export default App;
