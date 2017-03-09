import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Reservations.css';

function Reservations({ title }) {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    </Layout>
  );
}

Reservations.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(Reservations);
