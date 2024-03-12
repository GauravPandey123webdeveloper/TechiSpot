import React, { useState } from 'react';
import styles from './Post.module.css';
import Heart from 'react-animated-heart';
export default function PostButtons() {
  const [click, setClick] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isCommentsPost,setIsCommentsPost]=useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments,setComments]=useState([])
  const handleLikeToggle = () => {
    setClick(!click);
    setLikeCount(likeCount + (click ? -1 : 1));
  };
  function handleCommentClick(e){
    e.stopPropagation();
    setIsCommentsPost(true);
  }
  function handleCommentClose(){
    setIsCommentsPost(false);
  }
  function handleComments(){
    // e.prevent.default();
    setComments([...comments,newComment])
  }
  return (
    <div className={styles.reactions}>
      <div className={styles.likeContainer}>
        <Heart  onClick={handleLikeToggle} />
        <span className={styles.likeCount}>{likeCount}</span>
      </div>
      <i onClick={handleCommentClick} className="fa-regular fa-comments"></i>
          <i className="fa-regular fa-share-from-square"></i>
          <i className="fa-regular fa-bookmark"></i>
      {isCommentsPost && (
        <div className={styles.popup}>
          <div className={styles.popHeader}>
            <h3 className={styles.poptitle}>Comments</h3>
            <button onClick={handleCommentClose}>
              close
            </button>
          </div>
          {comments.map((value,index)=><li key={index}>{value}</li>)}
          
          <hr />
          <input
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          ></input>
          <button onClick={handleComments} >Post</button>
          {/* <input
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          ></input>
          <button onClick={handleComments}>Post</button> */}
          
          <hr />
          </div>
          )}
      
      
     </div>
  );
}
