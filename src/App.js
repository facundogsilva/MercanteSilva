
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
   <NavBar/>
   <ItemListContainer greeting= ' bienvendos a Mercante!'/>
   <ItemCount stock='5' initial='1' />
   </div>
  );
}

export default App;
