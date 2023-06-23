import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import css from './Statistics.module.css'


function Statistics({ title = 'Upload stats', stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
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
