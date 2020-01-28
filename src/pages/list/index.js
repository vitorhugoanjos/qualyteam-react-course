import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../../components/card";

const List = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function getRecipes() {
      const response = await api.get("food");
      setRecipes(response.data);
    }
    getRecipes();
  }, []);

  return (
    <>
      {recipes.map(recipe => (
        <Card key={recipe.id} {...recipe} />
      ))}
    </>
  );
};
export { List };
