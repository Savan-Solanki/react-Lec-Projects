import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });
  const [arr, setArr] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.name);
    console.log(input.password);
    setArr([...arr, input]);
    setInput({
      name: "",
      password: "",
    });

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <br /> <br />
        <input
          type="Password"
          placeholder="Enter Your Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
