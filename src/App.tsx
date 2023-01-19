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
      foundPerson?.length === 0 &&
      foundPerson?.name !== "Cristina Ruiz Trescastro"
    ) {
      return (
        <li>
          <p>no hay nadie con estos datos</p>
        </li>
      );
    } else {
      return foundPerson?.map((person: any, index: number) => {
        return (
          <div>
            {person.name === "Cristina Ruiz Trescastro" ? (
              <li key={index}>
                <div />
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  ¡¡¡ENHORABUENA {person.name}!!!
                </p>
                <p style={{ lineHeight: "24px" }}>
                  Es increíble que ya estemos en ese día tan esperado, temido y
                  soñado...
                </p>
                <p>
                  Parece que fue ayer cuando tu hermana Mokito comprobaba que
                  sacabas esos pedazo de 10!!! Y el orgullo que sentimos todos
                  es enorme,{" "}
                  <strong style={{ fontWeight: "bold" }}>
                    ¡LO HAS LOGRADO!
                  </strong>{" "}
                  y a pesar de todo.
                </p>
                <p>
                  Desde luego se puede decir que todo en la vida nos aporta algo
                  y tú, ante esa adversidad allá por el 2015 supiste crecer como
                  nadie, es para sentirse orgullosa.
                </p>
                <p>
                  Lo que hoy pase ahí dentro es solo un pasito más. Obviamente
                  importante y nos imaginamos lo nerviosa que puedes estar pero
                  confía en ti, en la buena cabeza que siempre has tenido y esto
                  no es una excepción.
                </p>
                <p>
                  Te queremos mucho muchas personas a las que cuidas cada día y
                  de las que estás pendiente, pese a la distancia, a tu poca
                  disponibilidad horaria para hablar, pero siempre encuentras
                  hueco.
                </p>
                <p>
                  Hoy será el comienzo de algo distinto, otra etapa y seguro que
                  la disfrutas como haces con todo.
                </p>
                <p>¡¡¡SUERTE!!!</p>
              </li>
            ) : (
              <li>
                <p style={{ fontWeight: "bold", fontSize: "24px" }}>
                  ¡Bienvenida!
                </p>
                <p style={{ lineHeight: "24px" }}>
                  Hace unos años..todo comenzó así. Esperabas un resultado que
                  te permitiera acceder a lo que querías...así que, por favor
                  introduce tu DNI y comprobemos cómo acaba esto.
                </p>
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
        <ul>{renderList()}</ul>
      </main>
    </div>
  );
}

export default App;
