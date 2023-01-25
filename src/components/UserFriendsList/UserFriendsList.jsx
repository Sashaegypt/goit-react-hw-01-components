import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import propTypes from 'prop-types';

export const UserFriendsList = ({ friends }) => {
  return (
    <ul className=''>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}; 

UserFriendsList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.exact({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired,
    })
  ).isRequired,
};