import PropTypes from 'prop-types';
import css from './Profile.module.css';

function Profile({ username, avatar, tag, location, stats }) {
  return (
    <div className={css.profile}>
      <div className="description">
        <img
          src={avatar}
          alt={username}
          className="avatar"
          height="150"
          width="150"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul
        className="stats"
        style={{
          display: 'inline-flex',
          listStyle: 'none',
          backgroundColor: '#EEEEEE',
          padding: '0',
        }}
      >
        <li
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            border: '1px solid #CDCDCD',
            padding: '10px 5px',
          }}
        >
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            border: '1px solid #CDCDCD',
            padding: '10px 5px',
            width: '65px',
          }}
        >
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            border: '1px solid #CDCDCD',
            padding: '10px 5px',
            width: '65px',
          }}
        >
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;