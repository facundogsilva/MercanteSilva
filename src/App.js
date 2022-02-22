
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer'

function App() {
  return (
    <div>
   <NavBar/>
   <ItemListContainer greeting= ' bienvendos a Mercante!'/>
   <ItemDetailContainer />
   <Footer />
   </div>
  );
}

export default App;
