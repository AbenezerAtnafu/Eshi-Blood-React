import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import NotFoundPage from "./pages/not-found";
import RequestsPage from "./pages/user/request/requests";
import UserLayout from "./components/user/user-layout";
const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>

      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/sign-up">
        <SignUpPage />
      </Route>

      <Route path="/user-layout">
        <UserLayout />
      </Route>

      <Route path="/requests">
        <RequestsPage />
      </Route>

      <Route path="*">
        <NotFoundPage />
      </Route>

    </Switch>
  );
};

export default App;
