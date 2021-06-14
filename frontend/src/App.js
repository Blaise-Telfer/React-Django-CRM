import './App.css';
import Home from './Home';
import Customers from './components/Customers';
import Navbar2 from './components/Navbar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       React JS Tutorial
     </h3>
	 
	 <Navbar2/>
	 
     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/customers' component={Customers}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
