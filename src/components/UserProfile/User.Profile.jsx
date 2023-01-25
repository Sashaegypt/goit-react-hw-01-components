import propTypes from 'prop-types';

export const UserProfile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className='profile'>
  <div className='description'>
    <img
      src={avatar}
      alt={username}
      className=''
      width='200'
    />
    <p className='name'>{username}</p>
    <p className='tag'>@{tag}</p>
    <p className='location'>{location}</p>
  </div>

  <ul className='stats'>
    <li>
      <span className='label'>Followers</span>
      <span className='quantity'> {stats.followers}</span>
    </li>
    <li>
      <span className='label'>Views</span>
      <span className='quantity'>{stats.views}</span>
    </li>
    <li>
      <span className='label'>Likes</span>
      <span className='quantity'>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

UserProfile.propTypes = {
    username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number).isRequired,
}