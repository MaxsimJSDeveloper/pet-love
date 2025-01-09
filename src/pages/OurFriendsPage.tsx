import { useDispatch, useSelector } from "react-redux";
import Title from "../shared/Tittle";
import { useEffect } from "react";
import { fetchFriends } from "../redux/friends/operation";
import { AppDispatch } from "../redux/store";
import {
  selectFriends,
  selectLoading,
  selectError,
} from "../redux/friends/selectors";
import Loader from "../components/ui/Loader";
import FriendsList from "../components/ui/FriendsList/FriendsList";

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
