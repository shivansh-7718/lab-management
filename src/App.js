
import './App.css';
import Navbar from './CommomComponents/Navbar/navbar';
import Homescreen from './Pages/Homescreen/homescreen';
import Footer from './CommomComponents/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homescreen/>
      <Footer/>
    </div>
  );
}

export default App;
