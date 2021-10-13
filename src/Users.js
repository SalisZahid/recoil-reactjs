import React, { useEffect } from "react";
import { users as usersAtom } from "./atoms";
import { useRecoilState } from "recoil";

export default function Users() {
  const [users, setUsers] = useRecoilState(usersAtom);

  useEffect(() => {
    const getUsers = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const resp = await fetch(url);
      const body = await resp.json();
      setUsers(body);
    };

    getUsers();
  }, []);

  return (
    <div>
      {users.map((post) => (
        <div key={post.id} className="card">
          <div className="title">{post.name}</div>
          <div className="title">{post.username}</div>
          <div className="body">{post.email}</div>
          <div className="body">{post.phone}</div>
          <div className="body">{post.body}</div>
        </div>
      ))}
    </div>
  );
}
