import React from 'react';
// import singUpConteiners from './components/singUpConteiners';
import MarketComponents from './components/market/marketComponents';
import CartButtonInfoComponent from './components/cart/cartButtonInfoComponent'
import cartComponents from './components/cart/cartComponents';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => (
    <Router>
        <React.Fragment>
            <CartButtonInfoComponent />
            <Switch>
                {/*  <Route component={singUpConteiners} path="/" exact /> */}
                <Route component={MarketComponents} path="/" exact />
                <Route component={cartComponents} path="/cart" exact />
            </Switch>
        </React.Fragment>
    </Router>

);

export default App;