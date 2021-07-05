import HomePage from './Components/HomePage';
import Navbar from './Components/NavBar';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import LogIn from './Components/LogIn';


function App() {
  return (
    <BrowserRouter>  
    <div className="App ">
    <Navbar/>
     <Route exact path="/" component={HomePage}/>
     <Route exact path="/login" component={LogIn}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
