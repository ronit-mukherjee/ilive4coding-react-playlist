import React, { useEffect, memo } from "react";

const ViewModesFunc = ({ viewMode = "", onSetViewMode }) => {
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

// class ViewModes extends React.PureComponent {
//   render() {
//     return (
//       <div className="btn-group" role="group" aria-label="View Modes">
//         <button
//           type="button"
//           className={`btn ${
//             this.props.viewMode === "add" ? "btn-primary" : "btn-secondary"
//           }`}
//           //onClick={this.props.onSetViewMode.bind(null, "add")}
//         >
//           Add Data
//         </button>
//         <button
//           type="button"
//           className={`btn ${
//             this.props.viewMode === "view" ? "btn-primary" : "btn-secondary"
//           }`}
//           //onClick={this.props.onSetViewMode.bind(null, "view")}
//         >
//           View Data
//         </button>
//       </div>
//     );
//   }

//   componentDidMount() {
//     console.log("ViewModes mounted");
//   }

//   componentDidUpdate() {
//     console.log(this.props.viewMode);
//     console.log("ViewModes updated");
//   }

//   componentWillUnmount() {
//     console.log("ViewModes unmounted");
//   }
// }

//export default ViewModesFunc;
export default memo(ViewModesFunc);
