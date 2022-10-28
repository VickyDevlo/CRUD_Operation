import React, { useState } from "react";
import CreateList from "./CreateList/CreateList";
import ReadList from "./ReadList/ReadList";

const usersData = [
  {
    id: 121,
    firstName: "Pranav",
    lastName: "Magare ",
    income: 400,
    age: 25,
  },
];

const Crud = () => {
  const [dataList, setDataList] = useState(usersData);
  const[editUser,setEditUser] = useState({})

  // get total income of users
  const totalIncome = dataList.reduce(
    (prevValue, currentValue) => prevValue + parseInt(currentValue.income),
    0
  );

  const CallbackDataObj = (obj) => {
    // console.log(obj);
    const findIndexItem = dataList.findIndex((item) => item.id === obj.id);

    findIndexItem === -1
      ? setDataList([...dataList, obj])
      : alert("Id already exists in table");  
  };

  const editUserCallback = (item) =>{
    setEditUser(item)
  }

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newDataList = dataList.filter((item) => item.id !== id);
      setDataList(newDataList);
    }
  };

  return (
    <div className="Crud">
      <div className="container">
        <div className="row">
          <div className="col">
            <CreateList CallbackDataObj={CallbackDataObj} editUser={setEditUser}/>
          </div>
          <div className="col">
            <ReadList
              data={dataList}
              totalIncome={totalIncome}
              handleRemove={handleRemove}
              editUserCallback ={editUserCallback}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crud;
