import PropTypes from 'prop-types';

function Statistics (props){
    const { title = "Upload stats", stats } = props;
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(el =>{return listItem(el)})}
      </ul>
    </section>
  );
};


const listItem = (el) => {
    const { label, percentage, id } = el;
    return (
      <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    );  
}


Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};
export default Statistics;
