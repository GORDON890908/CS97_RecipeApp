import { Switch, Link, BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDom from 'react-dom';
import RecipeDetail from './RecipeDetail.js'


import Main from './Main'



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