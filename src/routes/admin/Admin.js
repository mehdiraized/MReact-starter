import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Admin.scss';

class Admin extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(Admin);
