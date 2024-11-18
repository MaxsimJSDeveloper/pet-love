import FriendsItem from "../FriendsItem/FriendsItem";
import { FriendsListProps } from "./FriendsList.types";

export const FriendsList = ({ friends }: FriendsListProps) => {
  return (
    <ul className="flex flex-col gap-[20px]">
      {friends.map((friend) => (
        <li key={friend._id}>
          <FriendsItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
