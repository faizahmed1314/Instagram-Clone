import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="FaizAhmed"
          src="/static/images/avatar/1.jpg"
        />
        <h1>{username}</h1>
      </div>

      {/* Header--> avatar+username */}
      <img className="post__image" src={imageUrl} />
      {/* Image */}
      <h3 className="post__text">
        <strong>{username} :</strong>
        {caption}
      </h3>
      {/* username + caption */}
    </div>
  );
}

export default Post;
