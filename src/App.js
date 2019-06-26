import React from "react";
import "./App.scss";
import { List } from "./pages/list";
import { Navbar } from "./components/navbar";
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
    <div className="app">
      <Navbar />
      <main className="content--container">
        <Recipe {...recipe} />
      </main>
    </div>
  );
}

export default App;
