import React, { useEffect, useState } from "react";

export default function Form() {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const [arr, setArr] = useState(() => {
    let storeData = localStorage.getItem("DATA");
    return storeData ? JSON.parse(storeData) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (i) => {
    setEditIndex(i);
    setInput(arr[i]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setArr([...arr, input]);
    if (editIndex === null) {
      setArr([...arr, input]);
    } else {
      const updatedData = [...arr];
      updatedData[editIndex] = input;
      setArr(updatedData);
      setEditIndex(null);
    }
    setInput({
      name: "",
      password: "",
    });

    e.target.reset();
  };

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(arr));
  }, [arr]);

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
        <button type="submit">
          {editIndex === null ? "submit" : "Update"}
        </button>
        {
          // in there used onedit and on delete function used with handal submit button is not used for this method
          // editIndex === null ? <button>Submit</button> : <button>Update</button>
        }
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
                <button onClick={() => handleEdit(i)}>Edit</button>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
