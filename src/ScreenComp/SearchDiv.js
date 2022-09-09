import React from "react";

const SearchDiv = ({ searchByName }) => {
  return (
    <div className="search_div">
      <div className="search_input">
        <label htmlFor="">Search</label>
        <input
          type="text"
          placeholder="Search By Name"
          onChange={(e) => searchByName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchDiv;
