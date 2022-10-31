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
  const [edit, setedit] = useState();

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

  const editCallback = (item) => {
    setedit(item);
  };

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
            <CreateList CallbackDataObj={CallbackDataObj} edit={edit} />
          </div>
          <div className="col">
            <ReadList
              data={dataList}
              totalIncome={totalIncome}
              handleRemove={handleRemove}
              editCallback={editCallback}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crud;
