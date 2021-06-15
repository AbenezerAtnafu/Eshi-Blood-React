import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import NotFoundPage from "./pages/not-found";

const App = () => {
  return (
    <Switch>
      <Route path="/">
        <LoginPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/sign-up">
        <SignUpPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default App;
