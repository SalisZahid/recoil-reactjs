import React, { useEffect } from "react";
import { comments as commentsAtom } from "./atoms";
import { useRecoilState } from "recoil";

export default function Comments() {
  const [comments, setComments] = useRecoilState(commentsAtom);

  useEffect(() => {
    const getComments = async () => {
      const url = "https://jsonplaceholder.typicode.com/comments";
      const resp = await fetch(url);
      const body = await resp.json();
      setComments(body);
    };
    getComments();
  }, []);

  return (
    <div>
      {comments.map((post) => (
        <div key={post.id} className="card">
          <div className="title">{post.name}</div>
          <div className="body">{post.email}</div>
          <div className="body">{post.body}</div>
        </div>
      ))}
    </div>
  );
}
