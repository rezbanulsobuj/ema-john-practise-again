
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Navbar/Shop/Shop';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import SetUp from './components/SetUp/SetUp';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/home" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/setup" element={<SetUp></SetUp>}></Route>


      </Routes>

    </div>
  );
}

export default App;
