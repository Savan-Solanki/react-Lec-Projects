import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ShowData() {
  const location = useLocation();
  const item = location.state.data || [];
  const navigate = useNavigate();

  const gotohome = () => {
    navigate("/");
  };

  const [arr, setArr] = useState(() => {
    let storeData = localStorage.getItem("DATA");
    return storeData ? JSON.parse(storeData) : item;
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPassword, setEditPassword] = useState("");

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(arr));
  }, [arr]);

  const handleDelete = (index) => {
    const updatedData = arr.filter((_, i) => index !== i);
    setArr(updatedData);
  };

  const handleEdit = (i) => {
    setEditIndex(i);
    setEditName(arr[i].name);
    setEditPassword(arr[i].password);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editName.trim() || !editPassword.trim()) {
      alert("Name and Password cannot be empty");
      return;
    }
    const updatedData = arr.map((used, index) => {
      return index === editIndex
        ? { name: editName, password: editPassword }
        : used;
    });
    setArr(updatedData);
    setEditName("");
    setEditPassword("");
    setEditIndex(null);
  };

  return (
    <>
      <h1>ShowData</h1>
      <table border={1} id="table">
        <thead>
          <tr>
            <th>Sr no.</th>
            <th>Name</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.password}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      {editIndex !== null && (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Enter Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <br /><br />
          <input
            type="password"
            placeholder="Enter password"
            value={editPassword}
            onChange={(e) => setEditPassword(e.target.value)}
          />
          <br /><br />
          <button>Update</button>
        </form>
      )}
      <button onClick={gotohome}>GotoHome</button>
    </>
  );
}
