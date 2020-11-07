import React, { useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
import firebase from "firebase";
import { Input, Button } from "@material-ui/core";

function Post({ postId, username, caption, imageUrl, user }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComments("");
  };
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h2>{username}</h2>
      </div>

      {/* Header--> avatar+username */}
      <img className="post__image" src={imageUrl} />
      {/* Image */}
      <h3 className="post__text">
        <strong>{username} </strong>
        {caption}
      </h3>
      {/* username + caption */}
      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username} </strong> {comment.text}
          </p>
        ))}
      </div>
      {user && (
        <form className="post__commentBox">
          <Input
            className="post__input"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            className="post__button"
            type="submit"
            disabled={!comment}
            onClick={postComment}
          >
            Post
          </Button>
        </form>
      )}
    </div>
  );
}

export default Post;
