import { Friend } from "./Friend";

export function FriendList({ allFriends, onSelect, selectedFriend }) {
  return (
    <ul>
      {allFriends.map((el) => {
        return (
          <Friend
            friend={el}
            key={el.id}
            openSplitForm={onSelect}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}
