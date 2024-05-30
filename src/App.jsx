import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [searchValue, setSearchValue] = useState("");

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });

  const handleChangeSearch = (e) => {
    return setSearchValue(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) => {
    if (!searchValue) {
      return contacts;
    }
    return contact.name
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  const handleSubmit = (values, actions) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { ...values, id: nanoid() },
    ]);

    actions.resetForm();
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => {
        return contact.id !== contactId;
      })
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox searchValue={searchValue} handleChange={handleChangeSearch} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
