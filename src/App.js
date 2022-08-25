import React from "react"
// import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <React.StrictMode>
    <NavBar />
      <Switch>
        <Route component={withRouter(Home)} path='/' exact />
        <Route component={withRouter(About)} path='/about' />
        <Route component={withRouter(SinglePost)} path='/post/:slug' />
        <Route component={withRouter(Post)} path='/post' />
        <Route component={withRouter(Project)} path='/project' />
      </Switch>
      </React.StrictMode>
    </BrowserRouter >
  )
}

export default App;
