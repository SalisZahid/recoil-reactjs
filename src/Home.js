import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  return (
    <div className="home-main">
      <Link className="home-btns" to="/posts">
        Posts
      </Link>
      <Link className="home-btns" to="/comments">
        Comments
      </Link>
      <Link className="home-btns" to="/users">
        Users
      </Link>
      <Link className="home-btns" to="/all">
        View All
      </Link>
    </div>
  );
}
