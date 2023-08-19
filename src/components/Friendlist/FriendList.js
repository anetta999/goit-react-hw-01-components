import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListItemWrap } from './Friendlist.styled';
import { FriendListWrap } from './Friendlist.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap className="friend-list">
      {friends.map(friend => {
        return (
          <FriendListItemWrap key={friend.id} className="item">
            <FriendListItem friend={friend} />
          </FriendListItemWrap>
        );
      })}
    </FriendListWrap>
  );
};
