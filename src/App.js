
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
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:id' element={<ItemListContainer/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
      </Routes>
      <NavBar/>
   <ItemListContainer greeting= ' bienvendos a Mercante!'/>
   <ItemDetailContainer />
   <Footer />
   </BrowserRouter>
  );
}

export default App;
