import React from "react";
import "./style.css";
import Posts from "./Posts";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import All from "./All";
import Comments from "./Comments";
import Users from "./Users";

function App() {
  return (
    <div>
      {/* <Posts /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/all" component={All} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
