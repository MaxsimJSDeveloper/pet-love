import FriendsItem from "../FriendsItem/FriendsItem";
import { FriendsListProps } from "./FriendsList.types";

export const FriendsList = ({ friends }: FriendsListProps) => {
  return (
    <ul className="flex flex-col gap-[20px] md:flex-row md:flex-wrap">
      {friends.map((friend) => (
        <li className="w-[342px]" key={friend._id}>
          <FriendsItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
