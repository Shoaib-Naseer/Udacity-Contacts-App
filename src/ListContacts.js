import React, { Component } from "react";
const ListContacts = ({ contacts }) => {
  return (
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
          <div className="contact-remove">Remove</div>
        </li>
      ))}
    </ol>
  );
};

export default ListContacts;
