import React, { Component } from "react";
import ListContacts from "./ListContacts";

class App extends Component {
  state = {
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
      <div>
        {/* <ListContacts contacts={contacts} /> */}
        <ListContacts
          contacts={this.state.contacts}
          removeContacts={this.removeContacts}
        />
      </div>
    );
  }
}

export default App;
