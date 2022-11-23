import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createStore } from "redux";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
};

const vote = (state=0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    default:
      return state;
  };
};

let store = createStore(vote);

const Home = () => {
  store.dispatch({ type: 'ADD' });
  let  x = store.getState().toString();
  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold">Welcome to</h1>
      <p className="fs-3 my-3">React App!</p>
      <p>Next to<Link to="/about" className="">「About」</Link>page</p>
      <p>投票数： {x}</p>
    </div>
  );
};



const About = () => {
  let x = store.getState().toString();
  return (
  <div className="container text-center mt-5">
    <h1>About</h1>
    <p><Link to="/">Home</Link></p>
    <p>投票数：{x}</p>
  </div>
  );
};
export default App;
