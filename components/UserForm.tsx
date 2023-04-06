import React, { useState } from 'react';

function UserForm() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username); // replace this with your own logic to handle the username
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          className="input-field"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <button type="submit" className="submit-burron">
        Submit
      </button>
    </form>
  );
}

export default UserForm;
