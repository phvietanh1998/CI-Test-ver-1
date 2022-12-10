import { Row, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoSlice from "../redux/todoSlice";
import { filterStatusSelector } from "../redux/selectors";
export default function ToDoList({ id, name, completed }) {
  const dispatch = useDispatch();
  const status = useSelector(filterStatusSelector);

  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoSlice.actions.changeStatus(id));
  };
  function handleDelete() {
    dispatch(todoSlice.actions.deleteTodo(id));
  }
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      {status === "Completed" ? (
        <DeleteOutlined onClick={handleDelete} />
      ) : null}
    </Row>
  );
}
