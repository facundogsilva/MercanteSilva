
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting= ' bienvendos a Mercante!'/>}></Route>
        <Route path="/productos/:id"  element={<ItemDetailContainer />}></Route>
        <Route path='/product/category/:id' element={<ItemListContainer/>}></Route>
      </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
