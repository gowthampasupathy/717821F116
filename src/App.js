import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Product from './Components/product';
import Derails from './Components/Derails';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Product/>}></Route>
        <Route path='/product' element={<Derails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
