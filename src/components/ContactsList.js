import React from "react";
import Contact from "./Contact";

class ContactsList extends React.Component {
  render() {
    // console.log(this.props.contacts);
    return (
      <div>
        <ul>
          {this.props.contacts.map(contact => {
            return <Contact contact={contact} key={contact.id} />;
          })}
        </ul>
        <input type="text" value="Level up" />
      </div>
    );
  }
}

export default ContactsList;
