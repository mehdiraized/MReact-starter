import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './NotFound.scss';

class NotFound extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>Sorry, the page you were trying to view does not exist.</p>
        </div>
      </div>
    );
  }
}

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(NotFound);
