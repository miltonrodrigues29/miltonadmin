import "./userList.css";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../../../../dummy_data";
export default function UserList() {
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
