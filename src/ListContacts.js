import React, { useState } from "react";
import propTypes from "prop-types";

const ListContacts = ({ contacts, removeContacts }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="list-contacts">
      {query}
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search Contacts "
          value={query}
          onChange={(val) => setQuery(val.target.value.trim())}
        />
      </div>
      <ol className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.key} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{
                backgroundImage: `url(${contact.avatarURL})`,
              }}
            />
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <div
              className="contact-remove"
              onClick={() => removeContacts(contact)}
            >
              Remove
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
ListContacts.propTypes = {
  contacts: propTypes.array.isRequired,
  removeContacts: propTypes.func.isRequired,
};

export default ListContacts;
