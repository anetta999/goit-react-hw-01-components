import { Status } from './FriendlistItem.styled';
import { Avatar } from './FriendlistItem.styled';
import { Name } from './FriendlistItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status $isOnline={isOnline} className="status"></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </>
  );
};
