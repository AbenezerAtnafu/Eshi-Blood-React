import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import NotFoundPage from "./pages/not-found";
import AdminDashboard from './admin/adminDashboard';


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
      
      <Route path="/admin/dashboard">
        <AdminDashboard />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>

    
  );
};

export default App;
