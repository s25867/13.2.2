import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Add = () => {
  let query = useQuery();
  let x = Number(query.get("x"));
  let y = Number(query.get("y"));
  return <h2>{x + y}</h2>;
};

const Sub = () => {
  let query = useQuery();
  let x = Number(query.get("x"));
  let y = Number(query.get("y"));
  return <h2>{x - y}</h2>;
};

const Mul = () => {
  let query = useQuery();
  let x = Number(query.get("x"));
  let y = Number(query.get("y"));
  return <h2>{x * y}</h2>;
};

const Div = () => {
  let query = useQuery();
  let x = Number(query.get("x"));
  let y = Number(query.get("y"));
  return <h2>{x / y}</h2>;
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/add" element={<Add />} />
      <Route path="/sub" element={<Sub />} />
      <Route path="/mul" element={<Mul />} />
      <Route path="/div" element={<Div />} />
    </Routes>
  </Router>
);

export default App;
