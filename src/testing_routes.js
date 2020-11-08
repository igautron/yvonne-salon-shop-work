import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Index</Link>
                        </li>
                        <li>
                            <Link to="/linkAboutShop">About</Link>
                        </li>
                        <li>
                            <Link to="/ShopNav">404 page</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/ShopAboutShop">
                        <ShopAboutShop />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/404">
                        <ShopNav />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}