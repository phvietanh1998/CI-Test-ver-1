import { Radio } from "antd";
import AddButton from "./AddButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import filtersSlice from "../redux/filtersSlice";
import { filterStatusSelector } from "../redux/selectors";
export default function Filter() {
  const dispatch = useDispatch();
  const [filterStatus, setFilterStatus] = useState("All");
  const status = useSelector(filterStatusSelector);

  function handleStatusChange(e) {
    setFilterStatus(e.target.value);
    dispatch(filtersSlice.actions.statusFilterChange(e.target.value));
  }
  return (
    <div>
      <Radio.Group value={filterStatus} onChange={handleStatusChange}>
        <Radio.Button value="All">All</Radio.Button>
        <Radio.Button value="Completed">Completed</Radio.Button>
        <Radio.Button value="Active">Active</Radio.Button>
      </Radio.Group>
      {status !== "Completed" ? <AddButton></AddButton> : null}
    </div>
  );
}
