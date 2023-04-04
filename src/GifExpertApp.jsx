import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
  //Cuando pensamos en modificar el html tenemos que llamar algun hook para mantener el estado...

  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return console.warn(
        "No puedes añadir un elemento que ya esta en la lista"
      );
    }
    // categories.push("valorant"); dejar de usar estos tipos de metodos de arreglos (Por ahora) en react, siempre manipular el estado sin afectar el arreglo ariginal

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1 className="tituloApp">Gifs App</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* {gift item} */}
    </>
  );
};
