import styled from 'styled-components';

export const FriendListItemWrap = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  border: 2px solid black;
  border-radius: 8px;
`;

export const FriendListWrap = styled.ul`
  width: 350px;
  margin: 0 auto;
`;
