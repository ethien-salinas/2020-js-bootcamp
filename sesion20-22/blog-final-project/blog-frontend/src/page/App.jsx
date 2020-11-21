import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Home';
import { PublicPage } from './PublicPage';
import { LoginPage } from './LoginPage';
import { ProtectedPage } from './ProtectedPage';
import { About } from './About';
import { Users } from './Users';
import { PrivateRoute } from '../components/PrivateRoute';
import { ProvideAuth } from '../hook/ProvideAuth';

export const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <div>

          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/public">Public Page</Link></li>
              <li><Link to="/protected">Protected Page</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/public"><PublicPage /></Route>
            <Route path="/login"><LoginPage /></Route>
            <PrivateRoute path="/protected"><ProtectedPage /></PrivateRoute>
            <Route path="/about"><About /></Route>
            <Route path="/users"><Users /></Route>
            <Route path="/"><Home /></Route>
          </Switch>

        </div>
      </Router>
    </ProvideAuth>
  );
}