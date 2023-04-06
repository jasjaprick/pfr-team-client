import React, { useState } from 'react';

const userRoles = [
  'Product Owner',
  'Data Analyst',
  'Web Developer',
  'Backend Developer',
];

export function UserForm() {
  const [username, setUsername] = useState('');
  const [userRole, setUserRole] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUserRoleChange = (event) => {
    setUserRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { username, userRole };
    setUsername('');
    setUserRole('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        User Role:
        <select value={userRole} onChange={handleUserRoleChange}>
          {userRoles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add User</button>
    </form>
  );
}
