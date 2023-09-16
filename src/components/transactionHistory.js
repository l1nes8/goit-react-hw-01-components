import React from 'react';
import PropTypes from 'prop-types';
import css from './transactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead className={css.tableHead}>
        <tr>
          <th className={css.thTextwhite}>Type</th>
          <th className={css.thTextwhite}>Amount</th>
          <th className={css.thTextwhite}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.thText}>{item.type}</td>
            <td className={css.thText}>{item.amount}</td>
            <td className={css.thText}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
