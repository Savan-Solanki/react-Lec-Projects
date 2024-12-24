import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ShowData() {
  const location = useLocation();
  const item = location.state.data;
  const navigate = useNavigate();

  const gotohome = () => {
    navigate("/");
  };

  const [arr, setArr] = useState(() => {
    let storeData = localStorage.getItem("DATA");
    return storeData ? JSON.parse(storeData) : [];
  });

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(item));
  }, [item]);

  const handleDelete = (index) => {
    const updatedData = arr.filter((_, i) => index !== i);
    setArr(updatedData);
    localStorage.setItem("DATA", JSON.stringify(updatedData));
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
                <button>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <button onClick={gotohome}>GotoHome</button>
    </>
  );
}
