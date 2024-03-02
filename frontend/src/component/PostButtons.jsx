import React, { useState } from 'react';
import styles from './Post.module.css';
import Heart from 'react-animated-heart';

export default function PostButtons() {
  const [isClick, setClick] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeToggle = () => {
    setClick(!isClick);
    setLikeCount(likeCount + (isClick ? -1 : 1));
  };

  return (
    <div className={styles.reactions}>
      <div className={styles.likeContainer}>
        <Heart isClick={isClick} onClick={handleLikeToggle} />
        <span className={styles.likeCount}>{likeCount}</span>
      </div>
      <i className="fa-regular fa-comments"></i>
      <i className="fa-regular fa-share-from-square"></i>
      <i className="fa-regular fa-bookmark"></i> 
    </div>
  );
}
