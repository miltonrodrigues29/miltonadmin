import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
export const userData = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3000,
  },
  {
    name: "Mar",
    "Active User": 2000,
  },
  {
    name: "Apr",
    "Active User": 2780,
  },
  {
    name: "May",
    "Active User": 1890,
  },
  {
    name: "Jun",
    "Active User": 2390,
  },
  {
    name: "Jul",
    "Active User": 3490,
  },
  {
    name: "Aug",
    "Active User": 3430,
  },
  {
    name: "Sept",
    "Active User": 3550,
  },
  {
    name: "Oct",
    "Active User": 3210,
  },
  {
    name: "Nov",
    "Active User": 3410,
  },
  {
    name: "Dec",
    "Active User": 3430,
  },
];

export const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "username",
    headerName: "User name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "email",
    width: 140,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    width: 120,
  },
  {
    field: "transaction",
    headerName: "Status",
    description: "transaction details",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <button className="userListEdit">Edit</button>
          <DeleteOutlineIcon className="userListDelete"></DeleteOutlineIcon>
        </>
      );
    },
  },
];

export const rows = [
  {
    id: 1,
    username: "Jon Snow",
    avatar: "https://i.inews.co.uk/content/uploads/2019/04/jon-3.jpg",
    email: "jonsnow@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    username: "Jon Snow",
    avatar: "https://i.inews.co.uk/content/uploads/2019/04/jon-3.jpg",
    email: "jonsnow@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 3,
    username: "Jon Snow",
    avatar: "https://i.inews.co.uk/content/uploads/2019/04/jon-3.jpg",
    email: "jonsnow@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 4,
    username: "Jon Snow",
    avatar: "https://i.inews.co.uk/content/uploads/2019/04/jon-3.jpg",
    email: "jonsnow@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 5,
    username: "Jon Snow",
    avatar: "https://i.inews.co.uk/content/uploads/2019/04/jon-3.jpg",
    email: "jonsnow@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 6,
    username: "Jon Snow",
    avatar: "https://i.inews.co.uk/content/uploads/2019/04/jon-3.jpg",
    email: "jonsnow@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 7,
    username: "Jon Snow",
    avatar: "https://i.inews.co.uk/content/uploads/2019/04/jon-3.jpg",
    email: "jonsnow@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
];
