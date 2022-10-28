import React, { useState } from "react";
import Breadcrums from "./Breadcrums";

const Filter = () => {
  const json = [
    {
      id: 1,
      title: "Brand",
      categories: ["HP", "True Red", "Brother"],
    },
    {
      id: 2,
      title: "Environmental",
      categories: ["Any Eco Feature"],
    },
    {
      id: 3,
      title: "Ratings",
      categories: ["Good", "Bad", "Best"],
    },
  ];
  const [list, setList] = useState(json);

  const handleRemove = (index) => {
    console.log([json.categories[index]]);
  //   const newList = list.filter((item) => item.categories.index !== index);
  //  console.log(newList);
  //  setList(newList,index);
  const FilterList = list.map((item,index)=>{
    item.categories[index]
    console.log(FilterList);
  })
  };
  

  return (
    <>
      <Breadcrums data={list} handleRemove={handleRemove} />
    </>
  );
};

export default Filter;
