import { Switch, Link, BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDom from 'react-dom';
import RecipeDetail from './RecipeDetail.js'

import React from 'react';
import Search_bar from './search-bar.js';

//import content from 'content.js';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Search_bar} />
                <Route path='/detail/:id' component={RecipeDetail} />
            </Switch>
        </Router>
    );
}
export default App;