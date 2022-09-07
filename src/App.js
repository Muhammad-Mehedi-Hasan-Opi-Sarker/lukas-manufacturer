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
import SignUp from './Pages/SignLog/SignUp';
import Shop from './Pages/Shop/Shop';
import RequiredAuth from './Pages/RequiredAuth';
import Dhashboard from './Pages/Dashboard/Dhashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Reviews from './Pages/Dashboard/Reviews';
import Profile from './Pages/Dashboard/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllOrders from './Pages/Dashboard/AllOrders';
import Users from './Pages/Dashboard/Users';
import Payment from './Pages/Dashboard/Payment';

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
        <Route path='/shop' element={
          <RequiredAuth>
            <Shop></Shop>
          </RequiredAuth>
        }></Route>
        <Route path='/payment/:id' element={
          <RequiredAuth>
            <Payment></Payment>
          </RequiredAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequiredAuth>
            <Dhashboard></Dhashboard>
          </RequiredAuth>
        }>
          <Route index element={<Profile></Profile>}></Route>
          {/* <Route path='profile' element={<Profile></Profile>}></Route> */}
          <Route path='order' element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<Reviews></Reviews>}></Route>
          <Route path='allOrder' element={<AllOrders></AllOrders>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;