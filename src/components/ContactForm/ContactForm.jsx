import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Min 3").max(50, "max 50").required("Required"),
  number: Yup.string().min(3, "Min 3").max(50, "max 50").required("Required"),
});

const ContactForm = ({ handleSubmit }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formStyle}>
        <div className={css.inputWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId}></Field>

          <ErrorMessage
            className={css.validationMessage}
            name="name"
            component="span"
          />
        </div>
        <div className={css.inputWrapper}>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field type="text" name="number" id={phoneFieldId}></Field>

          <ErrorMessage
            className={css.validationMessage}
            name="number"
            component="span"
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
