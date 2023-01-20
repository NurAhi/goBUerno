import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import WriteComment from "./components/comments/comments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/goBUerno" element={<Home />} />
        <Route path="/goBUerno/comentarios" element={<WriteComment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
