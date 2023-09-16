import { useState } from "react";
import { Button } from "./App";

export function FormAddFriend({ submit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const id = `${image}?${crypto.randomUUID()}`;
  function handleSubmittion(e) {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      name,
      image,
      balance: 0,
      id,
    };
    setName("");
    setImage("");
    submit(newFriend);
  }
  return (
    <>
      <form className="form-add-friend" onSubmit={(e) => handleSubmittion(e)}>
        <label>👫Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>🌃 Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </>
  );
}
