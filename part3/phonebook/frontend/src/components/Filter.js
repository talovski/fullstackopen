import React from "react";

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      show filter with: <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
