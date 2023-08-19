import styled from 'styled-components';

export const TransaktionTable = styled.table`
  width: 700px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const TableHead = styled.thead`
  background-color: #00bcd46b;
`;
export const TableHeading = styled.th`
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
`;
export const TableRaw = styled.tr`
  &: nth-child(even) {
    background-color: #80808075;
  }
`;
