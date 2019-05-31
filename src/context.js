import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
