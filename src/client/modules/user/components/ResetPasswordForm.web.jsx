import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Form, RenderField, RenderErrors, Button } from '../../common/components/web';

const required = value => (value ? undefined : 'Required');

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength5 = minLength(5);

const validate = values => {
  const errors = {};

  if (values.password && values.passwordConfirmation && values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords do not match';
  }
  return errors;
};

const ResetPasswordForm = ({ handleSubmit, submitting, onSubmit, errors }) => {
  return (
    <Form name="resetPassword" onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="password"
        component={RenderField}
        type="password"
        label="Password"
        validate={[required, minLength5]}
      />
      <Field
        name="passwordConfirmation"
        component={RenderField}
        type="password"
        label="Password Confirmation"
        validate={[required, minLength5]}
      />
      <RenderErrors errors={errors} />
      <Button color="primary" type="submit" disabled={submitting}>
        Reset Password
      </Button>
    </Form>
  );
};

ResetPasswordForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  errors: PropTypes.array
};

export default reduxForm({
  form: 'resetPassword',
  validate
})(ResetPasswordForm);
