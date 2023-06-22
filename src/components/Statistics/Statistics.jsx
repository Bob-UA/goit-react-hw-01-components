import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';


function Statistics({ title = 'Upload stats', stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(({ label, percentage, id })=> {
          return (
            <StatisticItem
              key={id}
              label={label}
              percentage={percentage}
            />
          );
            
        })}
      </ul>
    </section>
  );
};





Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default Statistics;
