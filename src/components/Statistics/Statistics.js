import { StatisticsSection } from './Statistics.styled';
import { StatisticsTitle } from './Statistics.styled';
import { StatisticsList } from './Statistics.styled';
import { StatisticsListItem } from './Statistics.styled';
import { StatisticsLabel } from './Statistics.styled';
import { StatisticsPercentage } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection className="statistics">
      {title && <StatisticsTitle className="title">{title}</StatisticsTitle>}

      <StatisticsList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticsListItem key={id} className="item">
            <StatisticsLabel className="label">{label}</StatisticsLabel>
            <StatisticsPercentage className="percentage">
              {percentage}%
            </StatisticsPercentage>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
