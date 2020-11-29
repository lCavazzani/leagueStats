import * as React from "react";
import "./App.css";
import SummonerCard from "./components/SummonerCard";
import SearchCustomer from "./components/SearchSummoner";
import MatchlistTable from "./components/Matchlist"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      name: "",
      server: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.searchSummoner = this.searchSummoner.bind(this);
  }

  searchSummoner(name, server) {
    console.log(server.value)
    fetch(`http://localhost:4001/br1/${name}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.data, isLoaded: true });
      })
      .catch(console.log);
  }
  handleSelectChange = (server ) => {
    this.setState({ server });
  };
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  render() {
    const { isLoaded, data } = this.state;
    return (
      <div className="App">
        <SearchCustomer
          name={this.state.name}
          searchSummoner={this.searchSummoner}
          handleChange={this.handleChange}
          handleSelectChange={this.handleSelectChange}
          server={this.state.server}
        />
        {isLoaded ? 
        <div>
          <SummonerCard data={data} /> 
        <MatchlistTable matchlist={data.matchlist}></MatchlistTable> </div>
        
        : null}
        hi
      </div>
    );
  }
}

export default App;
