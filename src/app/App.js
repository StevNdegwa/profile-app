import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { HomePage, EditProfilePage, ViewProfilePage } from "./pages";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edit-profile">
          <EditProfilePage />
        </Route>
        <Route path="/view-profile">
          <ViewProfilePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}