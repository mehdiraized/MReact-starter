import React from 'react';
import PropTypes from 'prop-types';
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
          <form method="post">
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="usernameOrEmail">
                Username or email address:
                <input
                  className={s.input}
                  id="usernameOrEmail"
                  type="text"
                  name="usernameOrEmail"
                  autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                />
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
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(Login);
