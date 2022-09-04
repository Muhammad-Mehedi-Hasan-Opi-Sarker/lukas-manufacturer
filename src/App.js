import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import HomeInventory from './Pages/Home/HomeInventory';
import Headers from './Pages/Home/Headers';
import Inventory from './Pages/Shared/Inventory';

function App() {
  return (
    <div className="">
      <Headers></Headers>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/homeInventory/:id' element={<HomeInventory></HomeInventory>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
