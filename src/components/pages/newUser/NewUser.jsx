import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Milton"></input>
        </div>

        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Milton Rodrigues"></input>
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="rodriguesmilton21@gmail.com"></input>
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password"></input>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 789"></input>
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="NewYork | USA "></input>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male"></input>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="male"></input>
            <label for="female">Female</label>
            <input type="radio" name="gender" id="others" value="other"></input>
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
