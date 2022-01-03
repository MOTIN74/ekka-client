import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./Shared/Login/Login";
import Register from "./Shared/Register/Register";


import './App.css';

function App() {
  return (
    <div className="App">
       <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
