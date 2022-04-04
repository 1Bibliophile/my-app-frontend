import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import SubsidiaryCard from "./components/SubsidiaryCard"
import SubsidiaryForm from "./components/SubsidiaryForm"
import SubsidiariesContainer from "./containers/SubsidiariesContainer"
import Asset from "./components/Asset"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header slogan="Where Dreams Come True" company="Walt Disney Company" />
        <Switch>
          <Route path="/subsidiaries/new">
            <SubsidiaryForm />
          </Route>
          <Route path="/subsidiaries/:id">
            <SubsidiaryCard />
          </Route>
          <Route path="/subsidiaries">
            <SubsidiariesContainer />
          </Route>
          <Route path="/asset">
            <Asset />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
