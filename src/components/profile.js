import PropTypes from 'prop-types';
import css from './profiles.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <div className="description">
        <img src={avatar} alt={username} className="avatar" width="260px" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="itemStats">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="itemStats">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="itemStats">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
