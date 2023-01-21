import { useState } from "react";
import "../../App.css";

import data from "../../data/data.json";
import { Header } from "../../components/header";
import { Congrats } from "../congrats/congrats";
import { Welcome } from "../welcome";
import { DniForm } from "../dni-form";
import { Link } from "react-router-dom";

export const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [foundPerson, setFoundPerson] = useState<any>([
    {
      id: "",
      name: "",
      dni: "",
    },
  ]);

  const foundCristi = data.filter((user) => {
    return user.dni.toLowerCase().includes(searchInput.toLowerCase());
  });

  const doctorSearch = (e: any) => {
    e.preventDefault();

    if (searchInput.toUpperCase() !== "72752721H") {
      alert("DNI erroneo, vuelve a intentar 🫣");
    }

    setFoundPerson(foundCristi);
  };

  const handleOnChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const renderList = () => {
    return foundPerson?.map((person: any, index: number) => {
      return (
        <div>
          {person.dni === "72752721H" ? (
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
        <DniForm
          doctorSearch={doctorSearch}
          searchInput={searchInput}
          handleOnChange={handleOnChange}
        />
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
          <Link
            target="_self"
            to="/goBUerno/comentarios"
            relative="path"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Ver comentarios 📝
          </Link>
        </div>
      </main>
    </div>
  );
};
