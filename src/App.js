
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer'
import { CartContext } from "//contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContext.Provider>
          <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting= 'Hola, bienvendos a Mercante!'/>}></Route>
                <Route path="/productos/:id"  element={<ItemDetailContainer />}></Route>
                <Route path='/product/categoria/:category' element={<ItemListContainer/>}></Route>
                <Route path='/cart'></Route>
              </Routes>
          <Footer />
    </CartContext.Provider>
   </BrowserRouter>
  );
}

export default App;
