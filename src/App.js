import API from "./pokemonAPI"
import './App.css';
import React, {Component} from "react"



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

render () {
  return (
  <div>
    <API/>
    <p className="App-intro">;{this.state.apiResponse}</p>
  </div>
  );
}
}

export default App;
