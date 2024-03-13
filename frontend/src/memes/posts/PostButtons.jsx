import React, { useState, useEffect } from 'react';
import styles from './PostButtons.module.css';
import Heart from 'react-animated-heart';

export default function PostButtons() {
  const [click, setClick] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isCommentsPost, setIsCommentsPost] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem("username")!== null){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
  }, []);

  

  const handleLikeToggle = () => {
    // if (localStorage.getItem("username") !== "") {
    //   setIsLoggedIn(true);
    // }
    if (isLoggedIn) {
      setClick(!click);
      setLikeCount(likeCount + (click ? -1 : 1));
    } else {
      alert("Please log in to like the post.");
    }
  };

  function handleCommentClick(e) {
    e.stopPropagation();
    if (isLoggedIn) {
      setIsCommentsPost(true);
      
    } 
    else {
      alert("Please log in to comment .");
    }
  }

  function handleCommentClose() {
    setIsCommentsPost(false);
  }

  function handleComments() {
    if(newComment.trim()!==""){
      setComments([...comments, newComment]);
      setNewComment("")
    }
  }

  return (
    <div className={styles.reactions}>
      <div className={styles.likeContainer}>
        <Heart onClick={handleLikeToggle} filled={click}  />
        <span className={styles.likeCount}>{likeCount}</span>
      </div>
      <i onClick={handleCommentClick} className="fa-regular fa-comments"></i>
      <i className="fa-regular fa-share-from-square"></i>
      <i className="fa-regular fa-bookmark"></i>
      {isCommentsPost && (
        <div>
        <div className={styles.popup}>
          <div className={styles.popHeader}>
            <h3 className={styles.poptitle}>Comments</h3>
            <button onClick={handleCommentClose}>close</button>
          </div>
          {comments.map((value, index) => (
            <table key={index}><tr><td><img className={styles.profileImg} src="https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=" alt="pho" height="40px" width="40px"/></td><td><tr><td>{localStorage.getItem("username")}</td></tr><tr><td>{value}</td></tr></td></tr></table>
          ))}
        </div>
          <div className={styles.commentsInput}>
          <input
            placeholder="Add a comment"
            className={styles.commInp}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></input>
          <button className={styles.postBtn} onClick={handleComments}>Post</button>
          </div>
        </div>
      )}
    </div>
  );
}
