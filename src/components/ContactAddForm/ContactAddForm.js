import { Formik } from 'formik';
import {
  Form,
  Field,
  FormField,
  ErrorMessage,
  Button,
} from './ContactAddForm.styled';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').required('Name is required'),
  number: Yup.number().required('Must be filled'),
});

export const ContactAddForm = ({ addContact }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          addContact(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormField>
            Name:
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />
          </FormField>

          <FormField>
            Number:
            <Field name="number" type="tel" />
            <ErrorMessage name="number" component="span" />
          </FormField>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};
