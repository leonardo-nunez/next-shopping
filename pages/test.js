import { useEffect, useState } from 'react';
import Image from 'next/image';

const Test = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const users = await response.json();
      setUsers(users.results);
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user, i) => (
        <div key={i} style={{ border: '1px solid black', margin: '5px' }}>
          <Image
            src={user.picture.thumbnail}
            alt="user picture"
            height={50}
            width={50}
          />
          <h4>
            {user.name?.title} {user.name?.first} {user.name?.last}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Test;
