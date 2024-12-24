import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate()

  // const handleEdit = (index) => {
  //   setEditIndex(index);
  //   setName(arr[index].name);
  //   setPass(arr[index].password);
  // };
debugger
  const [arr, setArr] = useState(() => //{
   // let storeData = localStorage.getItem("DATA");
    //return storeData ? JSON.parse(storeData) : [];  
  //}
  []
);

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(arr));
  }, [arr]);

  // const handleDelete = (index) => {
  //   const updatedData = arr.filter((_, i) => index !== i);
  //   setArr(updatedData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) {
      setArr([...arr, { name: name, password: pass }]);
    } else {
      const updatedData = [...arr]
      updatedData[editIndex] = ({name:name,password:pass})
      setArr(updatedData)
      setEditIndex(null)
    }
    navigate("/showData",{state:{data:arr}})
    setName("");
    setPass("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">
          {editIndex === null ? "submit" : "Update"}
        </button>
      </form>
      <br />
      <br />
   
    </div>
  );
}
