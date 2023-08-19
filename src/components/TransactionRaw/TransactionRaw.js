import { TableData } from './TransactionRaw.styled';

export const TransactionRaw = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </>
  );
};
