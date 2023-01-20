// File: @/components/blog/comments.js

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Header } from "../header";

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
      console.log(comments, newData);
    });
  };

  useEffect(() => {
    fetchPost();
    setComments();
  }, []);

  console.log(comments, "array");
  return (
    <>
      <Header />
      <div>
        <h1 className="font-semibold text-lg">Deja aquí tu comentario 🥰</h1>
        <textarea
          type="text"
          placeholder="¿Qué te gustaría dedicarle?"
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <input
            type="text"
            placeholder="Pon aquí tu Nombre"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" onClick={addComment} className="">
          Guardar
        </button>
        {comments &&
          comments?.map((name, i) => (
            <div key={i} style={{ backgroundColor: "lightgrey", margin: "20px" border: '1px solid grey' }}>
              <p>{name.name}</p>
              <p>{name.text}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default WriteComment;
