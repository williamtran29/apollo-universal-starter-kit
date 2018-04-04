import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { Keyboard } from 'react-native';
import Field from '../../../utils/FieldAdapter';
import { FormView, RenderField, FormButton } from '../../common/components/native';
import { email, minLength, required, validateForm } from '../../../../../common/validation';

const contactFormSchema = {
  name: [required, minLength(3)],
  email: [required, email],
  content: [required, minLength(10)]
};

const validate = values => validateForm(values, contactFormSchema);

const ContactForm = ({ values, handleSubmit }) => {
  return (
    <FormView>
      <Field
        name="name"
        component={RenderField}
        type="text"
        label="Name"
        value={values.name}
        placeholderTextColor="#8e908c"
      />
      <Field
        name="email"
        component={RenderField}
        type="text"
        label="Email"
        value={values.email}
        keyboardType="email-address"
        placeholderTextColor="#8e908c"
      />
      <Field
        name="content"
        component={RenderField}
        type="textarea"
        label="Content"
        value={values.content}
        placeholderTextColor="#8e908c"
      />
      <FormButton onPress={handleSubmit}>Send</FormButton>
    </FormView>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  sent: PropTypes.bool,
  values: PropTypes.object
};

const ContactFormWithFormik = withFormik({
  mapPropsToValues: () => ({ content: '', email: '', name: '' }),
  async handleSubmit(values, { resetForm, props: { onSubmit } }) {
    await onSubmit(values);
    Keyboard.dismiss();
    resetForm();
  },
  validate: values => validate(values),
  displayName: 'ContactUsForm' // helps with React DevTools
});

export default ContactFormWithFormik(ContactForm);
