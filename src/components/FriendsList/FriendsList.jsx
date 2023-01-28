import css from './FriendsList.module.css';
import PropTypes from 'prop-types';

import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
       {friends.map(({ avatar, name, id, isOnline}) => {
console.log(avatar)
return  <FriendsListItem
          key={id}
          src={avatar}
          name={name}
          isOnline={isOnline}
        />
})}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
