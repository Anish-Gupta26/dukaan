import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Navbar';
import Product from './components/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
      <Body/>
      <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
