import React, { Component } from "react";
import CreateContact from "./CreateContact";
import ListContacts from "./ListContacts";

class App extends Component {
  state = {
    screen: "list",
    contacts: [
      {
        id: "ryan",
        name: "Ryan Florence",
        email: "ryan@reacttraining.com",
        avatarURL: "http://localhost:5001/ryan.jpg",
      },
      {
        id: "michael",
        name: "Michael Jackson",
        email: "michael@reacttraining.com",
        avatarURL: "http://localhost:5001/michael.jpg",
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        email: "tyler@reacttraining.com",
        avatarURL: "http://localhost:5001/tyler.jpg",
      },
    ],
  };

  removeContacts = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((item) => item.name !== contact.name),
    }));
  };

  render() {
    return (
      <div className="app">
        {/* <ListContacts contacts={contacts} /> */}
        {this.state.screen === "list" && (
          <ListContacts
            contacts={this.state.contacts}
            removeContacts={this.removeContacts}
            navigateTo={() => this.setState({ screen: "create" })}
          />
        )}
        {this.state.screen === "create" && <CreateContact />}
      </div>
    );
  }
}

export default App;
