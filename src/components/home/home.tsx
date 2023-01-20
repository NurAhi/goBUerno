import { useState } from "react";
import "../../App.css";

import data from "../../data/data.json";
import { Header } from "../../components/header";
import { Congrats } from "../congrats/congrats";
import { Welcome } from "../welcome";
import { DniForm } from "../dni-form";

export const Home = () => {
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
          <p>No hay nadie con estos datos</p>
        </li>
      );
    } else {
      return foundPerson?.map((person: any, index: number) => {
        return (
          <div>
            {person.name === "Cristina Ruiz Trescastro" ||
            searchInput !== "" ? (
              <li key={index}>
                <div className="c-image" />
                <Congrats person={person} />
              </li>
            ) : (
              <li>
                <Welcome />
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
      <main
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <DniForm setSearchInput={setSearchInput} doctorSearch={doctorSearch} />
        <ul>{renderList()}</ul>
        <div
          style={{
            backgroundColor: "#edca1fff",
            borderRadius: "4px",
            height: "40px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "150px",
          }}
        >
          <a
            target="_self"
            href="/goBUerno/comentarios"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Ver comentarios 📝
          </a>
        </div>
      </main>
    </div>
  );
};
