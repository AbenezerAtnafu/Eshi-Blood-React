import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import NotFoundPage from "./pages/not-found";
<<<<<<< HEAD
import RequestsPage from "./pages/user/request/requests";
import UserLayout from "./components/user/user-layout";
=======
import AdminDashboard from "./pages/admin";

>>>>>>> 6d02b3fa170925b76c4289278e8dde0c057c6ec3
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
<<<<<<< HEAD

      <Route path="/user-layout">
        <UserLayout />
      </Route>

      <Route path="/requests">
        <RequestsPage />
=======
      {/* 
        Admin route
      */}
      {/* <Route path="/admin/events">
        <EventsList />
      </Route> */}

      <Route path="/admin">
        <AdminDashboard />
>>>>>>> 6d02b3fa170925b76c4289278e8dde0c057c6ec3
      </Route>

      <Route path="*">
        <NotFoundPage />
      </Route>

    </Switch>
  );
};

export default App;
