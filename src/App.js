import React from "react";
import "./App.css";
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    // console.log("hi");
    // async function fetchData() {
    //   const response = await fetch("http://localhost:3000/albums", {
    //     mode: "no-cors",
    //   });
    //   // waits until the request completes...
    //   console.log(response.data);
    // }
    // fetchData();
    fetch("http://localhost:3000/albums", { mode: "no-cors" })
      .then((res) => {
        console.log("khkjshskhkhkfhk");
        res.json();
        console.log("hi how are you", res.json());
      })
      .then((json) => {
        console.log("iiii");
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
        {items.map((item) => (
          <ol key={item.id}>Title: {item.title}</ol>
        ))}
      </div>
    );
  }
}

export default App;
