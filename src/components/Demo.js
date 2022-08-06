import React, { Component } from 'react';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const handleClick = () => {
      //   this.setState({ count: this.state.count + 1 }, () =>
      //     console.log(this.state.count)
      //   );
      //   console.log(this.state.count);
      //   console.log('hii');
      this.setState((prevCount) => ({ count: prevCount.count + 1 }));
    };

    const incrementFive = () => {
      //   this.setState((prevCount) => ({ count: prevCount.count + 5 }));
      handleClick();
      handleClick();
      handleClick();
      handleClick();
      handleClick();
    };

    return (
      <>
        <h1>Count : {this.state.count}</h1>
        <button onClick={handleClick}>Increment</button>
        <button onClick={incrementFive}>Increment 5</button>
      </>
    );
  }
}
