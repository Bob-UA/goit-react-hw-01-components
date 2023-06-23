import PropTypes from 'prop-types';
import css from './TransactionElement.module.css'

function TransactionElement({ type, amount, currency }) {
      return (
        <tr>
          <td className={css.type}>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      );
}


TransactionElement.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionElement;
        