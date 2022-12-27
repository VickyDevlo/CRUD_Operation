import React, { useEffect, useState } from "react";

const CreateList = ({ CallbackDataObj, editobj, IsEdit, updateCallback }) => {
  const userFormObj = {
    firstName: "",
    lastName: "",
    age: null,
    income: null,
    id: null,
  };

  const [formObj, setFormObj] = useState(userFormObj);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    // setFormObj({
    //   ...formObj,
    //   [name]:
    //     name === "firstName" || name === "lastName" ? value : parseInt(value),
    // });
  };
  useEffect(() => {
    setFormObj(editobj);
  }, [editobj]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formObj.id &&
      formObj.firstName &&
      formObj.lastName &&
      formObj.age &&
      formObj.income
    ) {
      CallbackDataObj(formObj);
      setFormObj(userFormObj);
    } else {
      alert("fill the all fields");
    }
  };
  const updateHandler = (e) => {
    e.preventDefault();
    updateCallback(formObj);
    setFormObj(userFormObj);
  };

  return (
    <div className="container">
      <h2 className="mt-3"> {IsEdit ? "Update List" : "Create List"} </h2>

      <div className="row mt-5">
        <div className="col-lg-10">
          <form onSubmit={IsEdit ? updateHandler : submitHandler}>
            <div className="form-group">
              <label htmlFor="">Id</label>
              <input
                type="text"
                className="form-control"
                name="id"
                value={formObj.id === null ? "" : formObj.id}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Firstname</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={formObj.firstName}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Lastname</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={formObj.lastName}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="">Age</label>
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  value={formObj.age === null ? "" : formObj.age}
                  onChange={onChangeHandler}
                />
              </div>
              <label htmlFor="">Income</label>
              <input
                type="text"
                className="form-control"
                name="income"
                value={formObj.income === null ? "" : formObj.income}
                onChange={onChangeHandler}
              />
            </div>
            <button type="submit" className="btn btn-success form-control mt-2">
              {IsEdit ? "Update User" : "Add users"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateList;
