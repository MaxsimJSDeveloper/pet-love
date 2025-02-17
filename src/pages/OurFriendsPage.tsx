import FriendsList from "@components/ui/FriendsList/FriendsList";
import Loader from "@components/ui/Loader";
import { fetchFriends } from "@redux/friends/operation";
import {
  selectError,
  selectFriends,
  selectLoading,
} from "@redux/friends/selectors";
import { AppDispatch } from "@redux/store";
import Title from "@shared/Tittle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const OurFriendsPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const friends = useSelector(selectFriends);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <section>
      <Title style="mb-[40px] mt-[54px] md:text-[54px]">Our friends</Title>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      {friends.length > 0 ? (
        <FriendsList friends={friends} />
      ) : (
        !isLoading && <p>No friends find</p>
      )}
    </section>
  );
};

export default OurFriendsPage;
