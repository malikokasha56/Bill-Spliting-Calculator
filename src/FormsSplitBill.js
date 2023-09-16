import { useState } from "react";
import { Button } from "./App";

export function FormsSplitBill({ friend, onSubmission }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setypurExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendExpense = bill ? bill - yourExpense : "";

  function handleSubmittion(e) {
    e.preventDefault();
    if (!bill || !yourExpense) return;

    onSubmission(whoIsPaying === "user" ? friendExpense : -yourExpense);
    setBill("");
    setypurExpense("");
    setWhoIsPaying("user");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmittion}>
      <h2>SPLIT BILL WITH {friend.name}</h2>

      <label>💰 Bill value:</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🕴 Your expense:</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setypurExpense(
            Number(e.target.value) > bill ? yourExpense : Number(e.target.value)
          )
        }
      />

      <label>👬 {friend.name}'s expense:</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑 Who is paying the bill:</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
