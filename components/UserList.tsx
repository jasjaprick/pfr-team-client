import React, { useState, useEffect } from 'react';
import { getUsers } from '../api';
import '../style.css';

export const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setData(users));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data?.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};
