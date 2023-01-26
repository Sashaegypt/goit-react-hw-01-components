import propTypes from 'prop-types';
import { StatusStyled } from './Status';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className=''>
      <StatusStyled isOnline={isOnline}></StatusStyled>
      <img className='' src={avatar} alt="User avatar" width={50} />
      <p className=''>{name}</p> 
    </li>
  )
}

FriendsListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
