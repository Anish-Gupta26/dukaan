import './App.css';
import Body from './components/Body';
import Feature from './components/Features';
import Footer from './components/Footer';
import Header from './components/Navbar';
import Product from './components/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
      <Body/>
      <Feature/>
      <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
