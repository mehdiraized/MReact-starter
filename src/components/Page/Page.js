import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Page.scss';

class Page extends React.Component {
  render() {
    const { title, html } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default withStyles(s)(Page);
