import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { About } from "../page/About";
import { Home } from "../page/Home";
import { LoginPage } from "../page/LoginPage";
import { ProtectedPage } from "../page/ProtectedPage";
import { PublicPage } from "../page/PublicPage";
import { Users } from "../page/Users";
export const Routes = () => {
  return (
    <Switch>
      <Route path="/public"><PublicPage /></Route>
      <Route path="/login"><LoginPage /></Route>
      <PrivateRoute path="/protected"><ProtectedPage /></PrivateRoute>
      <Route path="/about"><About /></Route>
      <Route path="/users"><Users /></Route>
      <Route path="/"><Home /></Route>
    </Switch>
  )
}
