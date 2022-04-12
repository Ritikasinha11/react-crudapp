import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Allusers from "./Components/Allusers";
import Adduser from "./Components/Adduser";
import NotFound from "./Components/NotFound";
import EditUser from "./Components/EditUser";
import {BrowserRouter,Route,Switch} from 'react-router-dom';



function App() {
  return (
   <BrowserRouter>
    <NavBar />
    <Switch>
    <Route exact path="/" component={About}/>
    <Route exact path="/all" component={Allusers}/>
    <Route exact path="/add" component={Adduser}/>
    <Route exact path="/edit/:id" component={EditUser}/>
    <Route component ={NotFound}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
