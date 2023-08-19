import { TransactionRaw } from '../TransactionRaw/TransactionRaw';
import { TransaktionTable } from './TransaktionHistory.styled';
import { TableHeading } from './TransaktionHistory.styled';
import { TableRaw } from './TransaktionHistory.styled';
import { TableHead } from './TransaktionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TransaktionTable className="transaction-history">
      <TableHead>
        <tr>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => {
          return (
            <TableRaw key={item.id}>
              <TransactionRaw transaction={item} />
            </TableRaw>
          );
        })}
      </tbody>
    </TransaktionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
