import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { HomePage, EditProfilePage } from "./pages";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edit-profile">
          <EditProfilePage />
        </Route>
        <Route path="/view-profile">
          <div>View profile</div>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}