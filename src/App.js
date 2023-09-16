import { useState } from "react";
import { FriendList } from "./FriendList";
import { FormAddFriend } from "./FormAddFriend";
import { FormsSplitBill } from "./FormsSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

console.log();
export default function App() {
  const [isFriendFormOpen, setIsFriendForm] = useState(false);
  const [allFriends, setAllFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleFriendList(friendObj) {
    setAllFriends((allFriends) => [...allFriends, friendObj]);
    setIsFriendForm(false);
  }

  function handleFriendAddForm() {
    setIsFriendForm((show) => !show);
  }

  function handleSelectedFriend(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setIsFriendForm(false);
  }

  function handleSplitForm(value) {
    setAllFriends((friends) =>
      friends.map((el) =>
        el.id === selectedFriend.id
          ? { ...el, balance: el.balance + value }
          : el
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          allFriends={allFriends}
          onSelect={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {isFriendFormOpen && <FormAddFriend submit={handleFriendList} />}

        <Button clickHandle={handleFriendAddForm}>
          {isFriendFormOpen ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormsSplitBill
          friend={selectedFriend}
          onSubmission={handleSplitForm}
        />
      )}
    </div>
  );
}

export function Button({ children, clickHandle }) {
  return (
    <button className="button" onClick={clickHandle}>
      {children}
    </button>
  );
}
