import PropTypes from 'prop-types';
import css from './statistics.module.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ title, dataList }) => {
  return (
    <section className={css.statistics}>
      {title && <h1 className="title">{title}</h1>}
      <ul className={css.statList}>
        {dataList.map(data => (
          <li
            className={css.item}
            key={data.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{data.label} </span>
            <span className="percentage">{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  dataList: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
