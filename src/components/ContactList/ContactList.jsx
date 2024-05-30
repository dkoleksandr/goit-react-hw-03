import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.listCard}>
            <Contact
              handleDelete={() => {
                handleDelete(contact.id);
              }}
              contactName={contact.name}
              contactPhone={contact.number}
            ></Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
