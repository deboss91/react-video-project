import React from "react";
import ContactsList from "./components/ContactsList";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <ContactsList contacts={this.props.contacts} />
      </div>
    );
  }
}

// React.render(< App />, document.getElementById("App"));
export default App;
