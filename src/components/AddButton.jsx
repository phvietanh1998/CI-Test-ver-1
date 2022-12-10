import { Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import todoSlice from "../redux/todoSlice";
export default function AddButton() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(
      todoSlice.actions.addTodo({
        id: uuidv4(),
        name: inputValue,
        completed: false,
      })
    );
    setInputValue("");
  }
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <Input.Group style={{ display: "flex" }} compact>
      <Input value={inputValue} onChange={handleChange} />
      <Button type="primary" onClick={handleClick}>
        Add
      </Button>
    </Input.Group>
  );
}
