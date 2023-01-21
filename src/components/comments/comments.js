// File: @/components/blog/comments.js

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Header } from "../header";
import { Link } from "react-router-dom";

const WriteComment = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState([{ name: "", text: "" }]);

  const addComment = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "comentarios"), {
        name: name,
        text: text,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    alert("Comentario creado correctamente 🫣");

    setName("");
    setText("");
  };

  const fetchPost = async () => {
    await getDocs(collection(db, "comentarios")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setComments(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <Link to="/goBUerno" relative="path" className="c-button__back">
          Volver atrás
        </Link>
        <h2 className="">Deja aquí tu comentario 🥰</h2>
        <div>
          <input
            className="form__input"
            type="text"
            placeholder="Pon aquí tu Nombre"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <textarea
          className="form__input-text"
          type="text"
          placeholder="¿Qué te gustaría dedicarle?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" onClick={addComment} className="c-button">
          Guardar
        </button>
        {comments &&
          comments?.map((name, i) => (
            <div className="c-comments" key={i} style={{}}>
              <p className="c-coments__title">{name.name}</p>
              <p className="c-coments__text">{name.text}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default WriteComment;
