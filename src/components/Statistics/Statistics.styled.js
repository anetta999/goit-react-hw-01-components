import styled from 'styled-components';

export const StatisticsSection = styled.section`
  border: 1px solid black;
  border-radius: 5px;
  width: 400px;
  margin: 0 auto;
`;
export const StatisticsTitle = styled.h2`
  color: black;
  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 30px;
`;
export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  background-color: #0000ff17;
`;
export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: calc(100% - 8 * 4) / 5;
`;
export const StatisticsLabel = styled.span`
  color: grey;
  font-size: 15px;
  font-weight: 500;
`;
export const StatisticsPercentage = styled.span`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;
