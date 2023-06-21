import PropTypes from 'prop-types';

function FriendList(props) {
  const ar = props.friends;
  return (
    <ul className="friend-list">
      {ar.map(el => {
        return itemListMarckup(el);
      })}
    </ul>
  );
}

function itemListMarckup(el) {
  const { avatar, name, isOnline, id } = el;
  return (
    <li className="item" key={id}>
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

FriendList.propType = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
};

export default FriendList;
