
import './App.css';
import Navbar from './CommomComponents/Navbar/navbar';
import Homescreen from './Pages/Homescreen/homescreen';
import Footer from './CommomComponents/Footer/footer';
import{Routes,Route} from 'react-router-dom';
import Status from './Pages/Homescreen/StatusPage/status';
import Report from './Pages/Homescreen/ReportPage/report';
import Presciption from './Pages/Prescription/prescription';
import axios from 'axios';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
        
       <Routes> 
         <Route path='/' element={<Homescreen/> }/>
         <Route path='/status' element={<Status/> }/>  
         <Route path='/report/:id' element={<Report/>}/>
         <Route path='/prescription/:id' element={<Presciption/>}/>
       </Routes> 
        
      
        
    </div>
  );
}

export default App;
