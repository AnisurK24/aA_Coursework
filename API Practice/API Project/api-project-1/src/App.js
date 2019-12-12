import React from 'react';
import Buildings from "./components/buildings";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: []
    };
  }

  componentDidMount() {
    fetch("")
      .then(res => res.json())
      .then(data => {
        this.setState({ buildings: data });
      })
      .catch(console.log);
  }

  render() {
    
      return (
      
        <Buildings buildings={this.state.buildings} />
      )

  }
}

export default App;
