import { Button } from "./App";

export function Friend({ friend, openSplitForm, selectedFriend }) {
  return (
    <li className={friend.id === selectedFriend?.id ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      ) : (
        <p>You and your friends are even</p>
      )}
      <Button clickHandle={() => openSplitForm(friend)}>
        {selectedFriend?.id === friend.id ? "Close" : "Select"}
      </Button>
    </li>
  );
}
