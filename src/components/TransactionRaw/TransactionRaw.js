import { TableData } from './TransactionRaw.styled';
import PropTypes from 'prop-types';

export const TransactionRaw = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </>
  );
};

TransactionRaw.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
