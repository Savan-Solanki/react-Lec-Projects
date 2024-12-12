import React, { useEffect, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [arr, setArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, { name: name, password: pass }]);
    setName("");
    setPass("");
    e.target.reset();
  };

  const handleDelete = (i) => {
    const updatedData = arr.filter((_, index) => i !== index);
    setArr(updatedData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <input
          type="Password"
          placeholder="Enter Your Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((ele, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.password}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
