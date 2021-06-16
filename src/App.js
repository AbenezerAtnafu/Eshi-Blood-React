import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import NotFoundPage from "./pages/not-found";
import UserPage from "./pages/user";

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
      <Route path="/donor">
        <UserPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default App;
