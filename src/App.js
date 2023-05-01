import { useState } from "react";
import usersData from "./assets/data";

import AddForm from "./components/AddForm/AddForm";
import EditForm from "./components/EditForm/EditForm";

const getRandomId = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function App() {
  const [users, setUsers] = useState(usersData);

  const [currentUser, setCurrentUser] = useState(null);
  const [edit, setEdit] = useState(false);

  const sortUsers = (type) => {
    let newData;
    switch (type) {
      case "upId":
        newData = [...users].sort((a, b) => a.id - b.id);
        setUsers(newData);
        break;
      case "downId":
        newData = [...users].sort((a, b) => b.id - a.id);
        setUsers(newData);
        break;
      case "upYears":
        newData = users.sort((a, b) => Number(a.age) - Number(b.age));
        setUsers([...newData]);
        break;
      case "downYears":
        newData = users.sort((a, b) => Number(b.age) - Number(a.age));
        setUsers([...newData]);
        break;
      case "upName":
        newData = [...users].sort((a, b) => a.name.localeCompare(b.name));
        setUsers(newData);
        break;
      case "downName":
        newData = [...users].sort((a, b) => b.name.localeCompare(a.name));
        setUsers(newData);
        break;
      case "upEmail":
        newData = [...users].sort((a, b) => a.email.localeCompare(b.email));
        setUsers(newData);
        break;
      case "downEmail":
        newData = [...users].sort((a, b) => b.email.localeCompare(a.email));
        setUsers(newData);
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const user = new FormData(e.target);
    const newUser = {
      id: getRandomId(3, 100),
      name: user.get("name"),
      email: user.get("email"),
      age: user.get("age"),
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    document.querySelector(".newForm").reset();
  };

  const handleEdit = (editedUser) => {
    const newData = users.map((user) => {
      if (user.id === editedUser.id) {
        return {
          ...user,
          name: editedUser.name,
          email: editedUser.email,
          age: editedUser.age,
        };
      }
      return user;
    });
    setUsers(newData);
    setEdit(false);
  };

  const deleteUser = (id) => {
    const newData = users.filter((user) => user.id !== id);
    setUsers(newData);
  };

  return (
    <div className="mainBox">
      <AddForm onSubmit={handleSubmitForm} />
      <table>
        <thead>
          <tr>
            <th>
              <button
                className="arrow"
                onClick={() => sortUsers("upId")}
                name="up"
              >
                &#9650;
              </button>
              id
              <button
                className="arrow"
                onClick={() => sortUsers("downId")}
                name="down"
              >
                &#9660;
              </button>
            </th>
            <th>
              <button
                className="arrow"
                onClick={() => sortUsers("upName")}
                name="up"
              >
                &#9650;
              </button>
              name
              <button
                className="arrow"
                onClick={() => sortUsers("downName")}
                name="down"
              >
                &#9660;
              </button>
            </th>
            <th>
              <button
                className="arrow"
                onClick={() => sortUsers("upEmail")}
                name="up"
              >
                &#9650;
              </button>
              email
              <button
                className="arrow"
                onClick={() => sortUsers("downEmail")}
                name="down"
              >
                &#9660;
              </button>
            </th>
            <th>
              <button
                className="arrow"
                onClick={() => sortUsers("upYears")}
                name="up"
              >
                &#9650;
              </button>
              age
              <button
                className="arrow"
                onClick={() => sortUsers("downYears")}
                name="down"
              >
                &#9660;
              </button>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    className="action"
                    title="Edit"
                    onClick={() => {
                      setEdit(true);
                      setCurrentUser(user);
                    }}
                  >
                    &#128393;
                  </button>
                  <button
                    className="action"
                    onClick={() => deleteUser(user.id)}
                    title="Delete"
                  >
                    &#10060;
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
      {edit && <EditForm user={currentUser} onSubmit={handleEdit} />}
    </div>
  );
}

export default App;
