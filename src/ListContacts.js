import React, { useState } from "react";
import propTypes from "prop-types";
import escapeStringRegexp from "escape-string-regexp";
import sortBy from "sort-by";

const ListContacts = ({ contacts, removeContacts }) => {
  const [query, setQuery] = useState("");
  const clickHandler = () => {
    setQuery("");
  };

  let showingContacts;
  if (query) {
    //matching the query with escaping the /
    const match = new RegExp(escapeStringRegexp(query), "i");
    //match.test will check if the name matches with the query if it matches it returns that value
    showingContacts = contacts.filter((contact) => match.test(contact.name));
  } else {
    showingContacts = contacts;
  }

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search Contacts "
          value={query}
          onChange={(val) => setQuery(val.target.value.trim())}
        />
      </div>
      {showingContacts.length !== contacts.length && (
        <div className="showing-contacts">
          <span>
            Showing {showingContacts.length} of Total {contacts.length}
          </span>
          <button onClick={clickHandler}>Show All</button>
        </div>
      )}
      <ol className="contact-list">
        {showingContacts.map((contact) => (
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
