import React from "react";

class ClassBasedComponent extends React.PureComponent {
  nameInputRef = React.createRef();

  handleFormSubmit(e) {
    e.preventDefault();
    const enteredName = this.nameInputRef.current.value;

    if (enteredName) {
      this.props.onNameAdded(enteredName);
    }
  }

  handleFormSubmit = this.handleFormSubmit.bind(this);

  render() {
    return (
      <div className="container w-50 mt-5">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your Name"
              ref={this.nameInputRef}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ClassBasedComponent;
