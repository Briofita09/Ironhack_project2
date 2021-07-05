import HomePage from './HomePage';
import Navbar from './NavBar';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import LogIn from './LogIn';


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
