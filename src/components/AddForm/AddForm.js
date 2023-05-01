const AddForm = ({ onSubmit }) => {
  return (
    <form className="newForm" onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Enter name"
        id="name"
        name="name"
        minLength={3}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Enter email"
        id="email"
        name="email"
        required
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        placeholder="Enter age"
        id="age"
        name="age"
        maxLength={3}
        required
      />
      <button type="submit" className="submitBtn">
        Add new user
      </button>
    </form>
  );
};

export default AddForm;
