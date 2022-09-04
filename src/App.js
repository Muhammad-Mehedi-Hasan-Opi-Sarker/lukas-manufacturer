import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import HomeInventory from './Pages/Home/HomeInventory';
import Headers from './Pages/Home/Headers';
import Inventory from './Pages/Shared/Inventory';
import About from './Pages/About/About';
import SignIn from './Pages/SignLog/SignIn';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className="">
      <Headers></Headers>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/homeInventory/:id' element={<HomeInventory></HomeInventory>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
