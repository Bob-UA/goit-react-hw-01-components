import PropTypes from 'prop-types';
import css from './StatisticItem.module.css'

function StatisticItem({ label, percentage}) {
    return (
      <li
        className={css.item}
        style={{
          backgroundColor: getRandomColor(),
        }}
      >
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export default StatisticItem;