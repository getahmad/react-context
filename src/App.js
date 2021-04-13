import React from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <h1>context</h1>
      <Todos />
      <Form/>
    </div>
  );
};

export default App;
