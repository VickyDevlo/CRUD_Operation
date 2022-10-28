import React from "react";

const ReadList = ({ data, totalIncome, handleRemove }) => {
  // console.log("TotalSalary", totalSalary);
  // editHandler(data);
  const editHandler = (item) => { 
    console.log(item);
  };
  return (
    <div>
      {data == "" ? (
        <h4 className="mt-5">...No Recors Found!</h4>
      ) : (
        <div>
          <h2 className="mt-3">ReadList</h2>
          <table className="table table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Id</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Age</th>
                <th scope="col">Income</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1} </td>
                    <td>{item.id} </td>
                    <td>{item.firstName} </td>
                    <td> {item.lastName} </td>
                    <td> {item.age} </td>
                    <td> {item.income} </td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => editHandler(item)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger mx-3"
                        onClick={() => handleRemove(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h5 className="border">Total-Income - {totalIncome}.00</h5>
        </div>
      )}
    </div>
  );
};

export default ReadList;
