import React, { useState, useEffect } from 'react';
import '../style.css';

export const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () =>
    fetch('https://sea-lion-app-7ymjw.ondigitalocean.app/users')
      .then((res) => {
        const data = res.json();
      })
      .then((data: any) => {
        console.log('DATA', data);
        setUsers(data);
      });

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.userRole}
          </li>
        ))}
      </ul>
    </div>
  );
};
