import { FriendsListProps } from "./FriendsList.types";

export const FriendsList = ({ friends }: FriendsListProps) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend._id}>{friend.title}</li>
      ))}
    </ul>
  );
};

export default FriendsList;
