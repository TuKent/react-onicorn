import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
    </Router>
  );
}

export default App;
