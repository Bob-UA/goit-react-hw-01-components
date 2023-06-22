import PropTypes from 'prop-types';

function FriendItem({ avatar, name, isOnline}) {
  return (
    <li className="item">
      <span
        className="status"
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          display: 'block',
        }}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

export default FriendItem;
FriendItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
