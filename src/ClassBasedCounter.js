import React from "react";

class ClassBasedCounter extends React.PureComponent {
  state = {
    counter: parseInt(this.props.startsAt),
  };

  intervalRef = React.createRef();

  componentDidMount() {
    this.intervalRef = setInterval(() => {
      this.setState((state) => ({ counter: state.counter + 1 }));
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.startsAt !== this.props.startsAt) {
      //Clear old interval
      clearInterval(this.intervalRef);

      this.setState({ counter: parseInt(this.props.startsAt) });

      this.intervalRef = setInterval(() => {
        this.setState((state) => ({ counter: state.counter + 1 }));
      }, 1000);
    }
  }

  componentWillUnmount() {
    //Clear interval
    clearInterval(this.intervalRef);
  }

  render() {
    return (
      <div className="mt-5">
        <h2 className="text-center">Class Based Counter</h2>
        <h3 className="text-center">
          Counter Starts From {this.props.startsAt}
        </h3>
        <p
          className="text-center text-info"
          style={{ fontSize: 150, fontWeight: 300 }}
        >
          {this.state.counter}
        </p>
      </div>
    );
  }
}

export default ClassBasedCounter;
