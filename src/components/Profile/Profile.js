import { Wrapper } from './Profile.styled';
import { UserImg } from './Profile.styled';
import { UserName } from './Profile.styled';
import { UserInfo } from './Profile.styled';
import { Label } from './Profile.styled';
import { Quantity } from './Profile.styled';
import { StatsWrap } from './Profile.styled';
import { StatsWrapItem } from './Profile.styled';
import { UserDescriptionWrap } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <UserDescriptionWrap className="description">
        <UserImg src={avatar} alt="User avatar" className="avatar" width={70} />
        <UserName className="name">{username}</UserName>
        <UserInfo className="tag">@{tag}</UserInfo>
        <UserInfo className="location">{location}</UserInfo>
      </UserDescriptionWrap>

      <StatsWrap className="stats">
        <StatsWrapItem>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </StatsWrapItem>
        <StatsWrapItem>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </StatsWrapItem>
        <StatsWrapItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </StatsWrapItem>
      </StatsWrap>
    </Wrapper>
  );
};
