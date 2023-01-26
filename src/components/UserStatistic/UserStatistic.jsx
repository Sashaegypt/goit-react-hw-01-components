import { getRandomHexColor } from 'components/utils/getRandomHexColor'
import propTypes from 'prop-types';
import css from './UserStatistic.module.css'

export const UserStatistic = ({ title, stats }) => {
  return (
    <section className={css.statistic}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statistic_list}>
        {stats.map(stat => (
          <li
            className={css.stats_items}
            key={stat.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

UserStatistic.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};