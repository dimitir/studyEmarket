import React from 'react';
// import singUpConteiners from './components/singUpConteiners';
import MarketComponents from './components/marketComponents';
// import Cart from './components/cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => (
    <Router>
        <React.Fragment>
            <Switch>
               {/*  <Route component={singUpConteiners} path="/" exact /> */}
                <Route component={MarketComponents} path="/" exact />
              {/*   <Route component={Cart} path="/cart" exact /> */}
            </Switch>
        </React.Fragment>
    </Router>

);

export default App;