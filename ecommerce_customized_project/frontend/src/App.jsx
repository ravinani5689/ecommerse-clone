
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomizationPage from './pages/CustomizationPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <h1>Home Page</h1>
          </Route>
          <Route path="/customize" component={CustomizationPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
    