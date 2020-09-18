import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Orders from './components/Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './components/firebase';
import { useStateValue } from './StateManagement/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Stripe api key
const promise = loadStripe('pk_test_51HR8FrFvImqCvcoM4pTWjRhrwuEQ8noguAXKOUn1RxW04jJCvR3WwFo2RV2cdJeU4uRsHLHXnYBZkpCPgGqtxWIP00BjAwfFto');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run only ones when components mounts
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ->', authUser)

      if(authUser) {
        // the user just logged in
        dispatch({
          type: 'ADD_USER',
          user: authUser
        })
      } else {
        // the user logged out
        dispatch({
          type: 'ADD_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />            
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}> {/* Stripe Elements need to wrap around Payment component  */}
              <Payment />
            </Elements>            
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
