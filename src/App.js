import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './pages/index';
import AddToCart from "./pages/addToCart";
import Navbar from './components/Navbar';
import Addresspage from "./pages/addresspage";


import Login from './Auth/Login';

import PrivateRoute from './Auth/PrivateRoutes';
import {AppContextProvider} from './utils/Context';


function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Home />
    //   <AddToCart/>
    //   <Addresspage/>
    // </Router>
    <Router>
    <div>
      {/* using the context provider */}
      {/* <AppContextProvider>  */}
        
                <Switch>

                    <Route path="/login"  exact component={Login} />
                    <PrivateRoute path="/"  exact component={Home} /> 
                    <PrivateRoute path="/cartlist"  exact component={AddToCart} /> 
                    <PrivateRoute path="/address"  exact component={Addresspage} />                     
                </Switch>

      {/* </AppContextProvider> */}
      {/* using the context provider */}

    </div>
  </Router>
  );
}

export default App;
