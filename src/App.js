
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting= ' bienvendos a Mercante!'/>}></Route>
        <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='/item/category/:id' element={<ItemListContainer/>}></Route>
      </Routes>
   <ItemDetailContainer />
   <Footer />
   </BrowserRouter>
  );
}

export default App;
