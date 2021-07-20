import Navbar from "./components/NavBar.js";
import CodeEver from "./components/CodeEver.js";
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import EditUser from "./components/EditUser";
import NotFound from "./components/NotFound.js";
import {BrowserRouter,Route,Switch} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>

      <Navbar/>
      <Switch>
      <Route exact path="/" component={CodeEver}/>
      <Route exact path="/adduser" component={AddUser}/>
      <Route exact path="/alluser" component={AllUser}/>
      <Route exact path="/edituser/:id" component={EditUser}/>
      <Route  component={NotFound}/>
      </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
