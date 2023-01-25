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