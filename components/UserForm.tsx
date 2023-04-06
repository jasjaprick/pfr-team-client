import React, { useState } from 'react';
import { postUser } from '../api';

function UserForm() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postUser(username);
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
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default UserForm;
