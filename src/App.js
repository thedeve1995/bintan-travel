import React, { useEffect } from 'react';
import './App.css';
import Hero from './Hero';
import Testimonial from './Testimonial';
import Video from './Video';
import Packages from './Packages';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Checkout from './Checkout';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
     

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

   return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
             <Checkout />
          </Route>
          <Route path="/login">
             <Login />
          </Route>
          <Route path="/">
            <Header />
            <Hero />
            <div id='root2'></div>
            <Testimonial />
            <Video />
            <Packages />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
