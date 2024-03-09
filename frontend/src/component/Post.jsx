import React, { useState } from "react";
import styles from "./Post.module.css";
import PostButtons from "./PostButtons";
import { postdata } from "./Posts";
export default function Post() {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollowToggle = () => {
    setIsFollowing((prevState) => !prevState);
  };
  return (
    <div className={styles.post}>
      <div className={styles.newPost}>
        <img
          src="https://i.pinimg.com/564x/ac/18/49/ac18498ee93158817a026a82e8655fa7.jpg"
          alt="user"
          className={styles.userDP}
        />
        <label htmlFor="userpost">
          <input
            type="text"
            id="userpost"
            placeholder="What's going on!"
            className={styles.Input}
          />
        </label>
      </div>
      <hr />

      <div className={styles.emojis}>
        <i className="fa-regular fa-image"></i>
        <i className="fa-regular fa-face-smile"></i>
        <i className="fa-regular fa-calendar-days"></i>
        <button className={styles.Postbtn}>Post</button>
      </div>
      <hr />
      {postdata.map((data,idx) => (
        <div className={styles.userpost} key={idx}>
          <div className={styles.profileContainer}>
            <div className={styles.usrprofile}>
              <img
                src={data.userProfile.userImage}
                alt={data.userProfile.alt}
                className={styles.profilePic}
              />
              {data.userProfile.userName}
              <button
                className={`${styles.followButton} ${
                  isFollowing ? styles.whenclick1 : ""
                }`}
                onClick={handleFollowToggle}
              >
                {" "}
                {isFollowing ? "Following" : "Follow +"}
              </button>
            </div>
          </div>
          <div className={styles.userpostdata}>
            <p className={styles.discription}>{data.userPost.discription}</p>
            <img
              src={data.userPost.postImage}
              alt={data.userPost.alt}
              className={styles.pstimg}
            />
            <PostButtons />
          </div>
        </div>
      ))}
    </div>
  );
}
