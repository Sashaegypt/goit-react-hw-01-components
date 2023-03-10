import css from './FriendsListItem.module.css';
import PropTypes from 'prop-types';
import { StyledStatus } from './FriendsListItemStyled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  console.log("Hello world")
  return (
    <li className={css.item}>
      <StyledStatus isOnline={isOnline}></StyledStatus>
      <img 
     src={avatar}
        alt="Friends avatar"
      width={48}
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
