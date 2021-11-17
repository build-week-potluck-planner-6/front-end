import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import AccountCreation from './Components/AccountCreation';
import Nav from './Components/Nav';
import EventDisplay from './Components/EventDisplay';
import EventSignUp from './Components/EventSignUp';
import CreateEvent from './Components/CreateEvent';
import PrivateRoute from './Components/PrivateRoute';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route id = 'login' path="/login">
          <Nav />
          <Login />
        </Route>
        <Route id = 'create-account' path="/create-account">
          <Nav />
          <AccountCreation />
        </Route>
        <PrivateRoute id = 'event-display' path="/event-display">
          <Nav />
          <EventDisplay />
        </PrivateRoute>
        <PrivateRoute id = 'event-sign-up' path="/event-sign-up">
          <Nav />
          <EventSignUp />
        </PrivateRoute>
        <PrivateRoute id = 'create-event' path="/create-event">
          <Nav />
          <CreateEvent />
        </PrivateRoute>
        <Route id = 'home' path="/">
          <Nav />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
