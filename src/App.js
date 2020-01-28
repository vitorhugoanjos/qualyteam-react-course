import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components/navbar";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { List } from "./pages/list";
import { Recipe } from "./components/Recipe";

const recipe = {
  id: 6,
  title: "Batata belga",
  description: "Uma boa batata",
  imageUrl:
    "https://static.baratocoletivo.com.br/2017/0622/10012991/g_allfry-c4bbebed11.jpg",
  ingredients: "Batata, óleo, sal.",
  preparo: "Coloque tudo na fritadeira e uhaaa!"
};

function App() {
  return (
    <Router>
      <div className="app">
        {true ? (
          <Fragment>
            <Navbar />
            <main className="content--container">
              <Switch>
                <Route path="/" exact>
                  <List />
                </Route>
                <Route path="/food/:id" exact>
                  <Recipe />
                </Route>
              </Switch>
              {/* <Register /> */}
            </main>
          </Fragment>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
}

export default App;
