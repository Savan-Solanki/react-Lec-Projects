import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddData } from "./action";

export default function ReduxForm() {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const dispatch = useDispatch();
  const item = useSelector((state) => state.item);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddData(input));
    setInput({
      name: " ",
      password: " ",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.password}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
