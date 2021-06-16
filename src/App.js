import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import NotFoundPage from "./pages/not-found";
import AdminDashboard from "./pages/admin";

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
      {/* 
        Admin route
      */}
      {/* <Route path="/admin/events">
        <EventsList />
      </Route> */}

      <Route path="/admin">
        <AdminDashboard />
      </Route>

      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default App;
