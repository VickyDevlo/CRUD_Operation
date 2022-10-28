import React from "react";

const Breadcrums = ({ data, handleRemove }) => {
  //console.log(data);
  return (
    <>
      <div className="tags-input-container">
        {data &&
          data.map((item, index) => {
            return (
              <div className="tag-item" key={index}>
                <span className="text"> {item.title} :</span>
                <span className="sub-text">
                  {item.categories.map((subitem, index) => {
         

                    return (
                      <>
                        <span className="sub-text" key={index}>
                          {subitem}
                        </span>
                        <span
                          className="close"
                          onClick={() => handleRemove(index)}
                        >
                          &times;
                        </span>
                      </>
                    );
                  })}
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Breadcrums;
