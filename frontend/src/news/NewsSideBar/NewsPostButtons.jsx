import React, { useState } from 'react';
import styles from './NewsPostButtons.module.css';
import Heart from 'react-animated-heart';

export default function NewsPostButtons() {
    const [click, setClick] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [isCreatingComment, setIsCreatingComment] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);

    const handleLikeToggle = () => {
        setClick(!click);
        setLikeCount(likeCount + (click ? -1 : 1));
    };
    function handleCommentClick(e) {
        e.stopPropagation();
        setIsCreatingComment(true);
    }
    function handleCommentPost() {
        console.log('Comment posted:', commentText);
        setComments([...comments, commentText]);
        setCommentText('');
        setIsCreatingComment(false);
    };

    return (
        <div className={styles.reactions}>
            <div className={styles.likeContainer}>
                <Heart onClick={handleLikeToggle} />
                <span className={styles.likeCount}>{likeCount}</span>
            </div>
            <i onClick={handleCommentClick} className="fa-regular fa-comments"></i>
            <i className="fa-regular fa-share-from-square"></i>
            <i className="fa-regular fa-bookmark"></i>
            {isCreatingComment && (
                <div className={styles.popup}>
                    <div className={styles.popHeader}>
                        <h3 className={styles.poptitle}>Comments</h3>
                        <button onClick={handleCommentPost} className={styles.btn}>
                            close
                        </button>
                    </div>
                    {comments.map((value, index) => <li key={index}>{value}</li>)}
                    <hr />
                    <input
                        placeholder="Add a comment"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    ></input>
                    <button onClick={handleCommentPost} className={styles.btn}>Post</button>
                    <hr />
                </div>
            )}
        </div>
    );
}
