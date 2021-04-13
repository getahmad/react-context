import React, { useContext } from "react";
import { del } from "../actions/listAction";
import { DataContext } from "../context/DataContext";

const Todos = () => {
  const { lists, dispatch } = useContext(DataContext);
  const remove = (id) => {
    dispatch(del(id));
  };

  return (
    <div>
      <ul>
        {lists.map((item, index) => (
          <li key={index}>
            {item.title}
            <button onClick={(e) => remove(item.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
