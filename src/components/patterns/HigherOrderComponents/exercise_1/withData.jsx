import React from "react";

/*
  A higher-order component (HoC) is a function that:
    1- receives a COMPONENT as a parameter (hint: is this function receving a component?)
    2- and returns another component
*/
const withData = (Component) => {
  class OuterComponent extends React.Component {
    state = {
      data: undefined,
      loading: false,
      error: undefined
    };

    componentDidMount = async () => {
      this.setState({ loading: true });
      try {
        const response = await fetch(this.props.url);
        const data = await response.json();
        this.setState({ data });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    };

    render() {
      // you should return something here
      return <Component {...this.props} {...this.state} />
      // This is alternative way of writing it - it is more explicit..if you want to add another variable later and don't
      // want to pass interface..this is better
      // There is a balance if there are 20 items in state...mybe spread but then again this should be a separate component
      // return <Component {...this.props} data={this.state.data} loading={this.state.loading} error={this.state.error}/>
    }
  }

  return OuterComponent;
};

export default withData;
