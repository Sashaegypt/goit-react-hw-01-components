import { getRandomHexColor } from 'components/utils/getRandomHexColor'
import propTypes from 'prop-types';

export const UserStatistic = ({ title, stats }) => {
  return (
    <section className=''>
      {title && <h2 className=''>{title}</h2>}

      <ul className=''>
        {stats.map(stat => (
          <li
            className=''
            key={stat.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className=''>{stat.label}</span>
            <span className=''>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};