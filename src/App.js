import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {About, Contact, Home, Nav, Portfolio} from "./components"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Switch>
        <Route component={Home} path='/home'/>
        <Route component={About} path='/about'/>
        <Route component={Portfolio} path='/portfolio'/>
        <Route component ={Contact} path='/contact'/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
