import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const UserDescriptionWrap = styled.div`
  padding: 12px 30px;
`;

export const UserImg = styled.img`
  margin: 0 auto;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  text-align: center;
  color: black;
  font-size: 25px;
  font-weight: 500;
`;

export const UserInfo = styled.p`
  margin-bottom: 10px;
  text-align: center;
  color: grey;
  font-size: 18px;
`;

export const Label = styled.span`
  color: grey;
  font-size: 15px;
  font-weight: 500;
`;

export const Quantity = styled.span`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;

export const StatsWrap = styled.ul`
  padding: 12px 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  border-top: 1px solid grey;
  border-radius: 5px;
`;

export const StatsWrapItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;
