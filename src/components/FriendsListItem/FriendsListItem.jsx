import propTypes from 'prop-types';
// import Status from './Status'

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className=''>
      {/* <Status isOnline={isOnline}></Status> */}
      <img className='' src={avatar} alt="User avatar" />
      <p className=''>{name}</p>
    </li>
  )
}

FriendsListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
