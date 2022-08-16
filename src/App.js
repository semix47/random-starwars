import "./App.css";

/* import Item from "./MyItem"; */

import React from "react";

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      img: null,
      characterLoaded: false,
    };
  }
  getNewCharacter() {
    let randomNum = Math.ceil(Math.random() * 82);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNum}.json`;
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          img: data.image,
          characterLoaded: true,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.characterLoaded && (
          <div>
            <img src={this.state.img} alt="" width="500" height="300" />
            <h1>{this.state.name}</h1>
            <p>{this.state.height} cm</p>
            <p>
              <a href={this.state.homeworld}>{this.state.homeworld}</a>
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => this.getNewCharacter()}
          className="btn"
        >
          Randomize Character
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
