import FriendListItem from "../FriendListItem/FriendListItem";
import clsx from "clsx";
import s from "../FriendList/FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={s.wrapper}>
      <ul className={clsx(s.friendsList)}>
        {friends.map((friend) => (
          <li className={s.friendsListItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
