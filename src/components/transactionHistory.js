import React from 'react';
import PropTypes from 'prop-types';
import css from './transactionHistory.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead className="tableHead">
        <tr>
          <th className="thText white">Type</th>
          <th className="thText white">Amount</th>
          <th className="thText white">Currency</th>
        </tr>
      </thead>
      <tbody className="tableBody">
        {items.map(item => (
          <tr key={item.id}>
            <td className="thText">{item.type}</td>
            <td className="thText">{item.amount}</td>
            <td className="thText">{item.currency}</td>
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
