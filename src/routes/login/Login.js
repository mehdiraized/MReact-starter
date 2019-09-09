import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p className={s.lead}>
            Log in with your username or company email address.
          </p>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className={s.formGroup}>
                  <label className={s.label} htmlFor="usernameOrEmail">
                    Username or email address:
                    <input
                      className={s.input}
                      id="usernameOrEmail"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                    />
                    {errors.email && touched.email && <div>{errors.email}</div>}
                  </label>
                </div>
                <div className={s.formGroup}>
                  <label className={s.label} htmlFor="password">
                    Password:
                    <input
                      className={s.input}
                      id="password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <div>{errors.password}</div>
                    )}
                  </label>
                </div>
                <div className={s.formGroup}>
                  <button
                    className={s.button}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Log in
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(Login);
