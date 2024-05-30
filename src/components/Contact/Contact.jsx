const Contact = ({ contactName, contactPhone, handleDelete }) => {
  return (
    <>
      <div>
        <div>{contactName}</div>
        <div>{contactPhone}</div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Contact;
