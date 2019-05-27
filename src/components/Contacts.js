import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Jhon Snow",
        phone: "01800 winteris",
        email: "snow@invernalia.com"
      },
      {
        id: 2,
        name: "Daenerys Targaryen",
        phone: "01800 iwantall",
        email: "snow@dragons.com"
      },
      {
        id: 3,
        name: "Sansa Stark",
        phone: "01800 winteris",
        email: "sansa@invernalia.com"
      }
    ]
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
