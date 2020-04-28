import React, { useEffect } from "react";

const ViewModes = ({ viewMode = "", onSetViewMode }) => {
  useEffect(() => {
    console.log("ViewModes Mounted");
  }, []);
  useEffect(() => {
    console.log("ViewModes Updated/Re-Rendered");
  });
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className={`btn ${
          viewMode === "add" ? "btn-primary" : "btn-secondary"
        }`}
        onClick={onSetViewMode.bind(null, "add")}
      >
        Add Data
      </button>
      <button
        type="button"
        className={`btn ${
          viewMode === "view" ? "btn-primary" : "btn-secondary"
        }`}
        onClick={onSetViewMode.bind(null, "view")}
      >
        View Data
      </button>
    </div>
  );
};

export default ViewModes;
