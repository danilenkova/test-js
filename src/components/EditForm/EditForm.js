import { useState } from "react";

const EditForm = ({ user, onSubmit }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "age":
        setAge(value);
        break;
      default:
        return;
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    saveUser();
    setName("");
    setEmail("");
    setAge("");
  };

  const saveUser = () => {
    const id = user.id;
    const refreshUser = { id, name, email, age };
    onSubmit(refreshUser);
  };

  return (
    <form className="newForm" onSubmit={handelSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Enter name"
        id="name"
        name="name"
        minLength={3}
        required
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Enter email"
        id="email"
        name="email"
        required
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        placeholder="Enter age"
        id="age"
        name="age"
        maxLength={3}
        required
        value={age}
        onChange={handleChange}
      />
      <button type="submit" className="submitBtn">
        Save
      </button>
    </form>
  );
};

export default EditForm;
