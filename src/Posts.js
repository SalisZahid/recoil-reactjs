import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { posts as postsAtom } from "./atoms";

export default function Posts() {
  const [repos, setRepos] = useRecoilState(postsAtom);

  useEffect(() => {
    const getRepos = async () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const resp = await fetch(url);
      const body = await resp.json();
      setRepos(body);
    };

    getRepos();
  }, []);

  return (
    <div>
      <React.Suspense
        fallback={<div style={{ display: "flex" }}>Loading...</div>}
      >
        {repos.map((post) => (
          <div key={post.id} className="card">
            <div className="title">{post.title}</div>
            <div className="body">{post.body}</div>
          </div>
        ))}
      </React.Suspense>
    </div>
  );
}
