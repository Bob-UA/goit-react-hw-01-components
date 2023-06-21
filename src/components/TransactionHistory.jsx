import PropTypes from 'prop-types';

function TransactionHistory(props) {
  const ar = props.items;
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {ar.map(el => {
          return tableMarckup(el);
        })}
      </tbody>
    </table>
  );
}

function tableMarckup(el) {
  const { id, type, amount, currency } = el;
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}

export default TransactionHistory;
