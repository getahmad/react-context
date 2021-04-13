import React, { useContext, useState } from "react";
import { add } from "../actions/listAction";
import { DataContext } from "../context/DataContext";

const Form = () => {
  const [text, setText] = useState("");

  const { dispatch } = useContext(DataContext);

  const change = (e) => {
    setText(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={text}
        placeholder="enter new list"
        onChange={change}
      />
      <button>add</button>
    </form>
  );
};

export default Form;
