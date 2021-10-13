import React from "react";
import { useRecoilState } from "recoil";
import { posts as postsAtom } from "./atoms";
import { users as usersAtom } from "./atoms";
import { comments as commentsAtom } from "./atoms";

export default function All() {
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [users, setUsers] = useRecoilState(usersAtom);
  const [comments, setComments] = useRecoilState(commentsAtom);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "33%" }}>
        {comments.map((post) => (
          <div key={post.id} className="card">
            <div className="title">{post.name}</div>
            <div className="body">{post.email}</div>
            <div className="body">{post.body}</div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "33%" }}>
        {users.map((post) => (
          <div key={post.id} className="card">
            <div className="title">{post.name}</div>
            <div className="body">{post.email}</div>
            <div className="body">{post.body}</div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "33%" }}>
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div className="title">{post.name}</div>
            <div className="body">{post.email}</div>
            <div className="body">{post.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
