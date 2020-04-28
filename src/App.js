import React from "react";
import AddData from "./AddData";
import ViewData from "./ViewData";
import ViewModes from "./ViewModes";

class App extends React.PureComponent {
  state = {
    viewMode: "add",
    //dataList: [],
  };

  dataList = React.createRef();

  setViewMode(viewMode) {
    this.setState({ viewMode });
  }

  addData(data) {
    this.dataList.current = [...this.dataList.current, data];
    // this.setState((state) => ({
    //   dataList: [...state.dataList, data],
    // }));
  }
  addData = this.addData.bind(this);

  render() {
    return (
      <div className="App container">
        <div className="row mt-5">
          <div className="col">
            <h1 className="text-center">Use React Ref Differently</h1>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-auto">
            <ViewModes
              viewMode={this.state.viewMode}
              onSetViewMode={this.setViewMode.bind(this)}
            />
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-8">
            {this.state.viewMode === "add" ? (
              <AddData onAddData={this.addData} />
            ) : (
              //<ViewData data={this.state.dataList} />
              <ViewData data={this.dataList.current} />
            )}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("App Mounted");
    this.dataList.current = [];
  }
  componentDidUpdate() {
    console.log("App Re-Rendered/Updated");
  }
}

export default App;
