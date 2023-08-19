import styled from 'styled-components';

const getStatusBcgColor = props => {
  return props.isOnline ? 'green' : 'orange';
};
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${getStatusBcgColor};
`;
export const Avatar = styled.img`
  border: 1px solid black;
  border-radius: 8px;
  background-color: #0000ff17;
`;
export const Name = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;
