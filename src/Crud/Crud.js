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
  const [IsEdit, setIsEdit] = useState(false);

  const [editobj, seteditobj] = useState({
    id: "",
    firstName: "",
    lastName: "",
    income: "",
  });

  const totalIncome = dataList.reduce(
    (prevValue, currentValue) => prevValue + parseInt(currentValue.income),
    0
  );

  const CallbackDataObj = (obj) => {
    const findIndexItem = dataList.findIndex((item) => item.id === obj.id);

    findIndexItem === -1
      ? setDataList([...dataList, obj])
      : alert("Id already exists in table");
  };

  const editHandler = (item) => {
    console.log(item);
    seteditobj(item);
    setIsEdit(true);
  };

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newDataList = dataList.filter((item) => item.id !== id);
      setDataList(newDataList);
    }
  };
  const updateCallback = (updatedItem) => {
    setDataList(
      dataList.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setIsEdit(false);
  };

  return (
    <div className="Crud">
      <div className="container">
        <div className="row">
          <div className="col">
            <CreateList
              CallbackDataObj={CallbackDataObj}
              editobj={editobj}
              IsEdit={IsEdit}
              updateCallback={updateCallback}
            />
          </div>
          <div className="col">
            <ReadList
              data={dataList}
              totalIncome={totalIncome}
              handleRemove={handleRemove}
              editHandler={editHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crud;
