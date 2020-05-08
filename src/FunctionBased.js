import React, { memo, useRef } from "react";

let FunctionBasedComponent = (props) => {
  const nameInputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;

    if (enteredName) {
      props.onNameAdded(enteredName);
    }
  };

  return (
    <div className="container w-50 mt-5">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your Name"
            ref={nameInputRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

FunctionBasedComponent = memo(FunctionBasedComponent);

export default FunctionBasedComponent;
