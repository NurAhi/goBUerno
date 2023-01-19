import React, { useState } from "react";
import "./App.css";

import data from "./data/data.json";
import { Header } from "./components/header";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [foundPerson, setFoundPerson] = useState<any>([
    {
      id: "",
      name: "",
      dni: "",
    },
  ]);

  const doctorSearch = () => {
    if (searchInput === null) return;

    const foundCristi = data.filter((user) => {
      return user.dni.toLowerCase().includes(searchInput.toLowerCase());
    });

    setFoundPerson(foundCristi);
  };

  const renderList = () => {
    if (
      foundPerson.length === 0 &&
      foundPerson.name !== "Cristina Ruiz Trescastro"
    ) {
      return <li>no hay nadie con estos datos</li>;
    } else {
      return foundPerson.map((person: any, index: number) => {
        return (
          <div>
            {person.name === "Cristina Ruiz Trescastro" ? (
              <li key={index}>Enhorabuena {person.name} has aprobado</li>
            ) : (
              <li>
                ¡Bienvenida! Hace unos años..todo comenzó así. Esperabas un
                resultado que te permitiera acceder a lo que querías...así que,
                por favor introduce tu DNI y comprobemos cómo acaba esto.
              </li>
            )}
          </div>
        );
      });
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="container">
        <ul>{renderList()}</ul>
        <form className="c-input-search">
          <input
            className="c-input-search__input"
            type="search"
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Comprueba tu DNI"
          />
          <button
            className="c-input-search__button"
            type="button"
            onClick={() => doctorSearch()}
          >
            Buscar
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
