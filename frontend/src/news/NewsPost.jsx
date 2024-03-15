import React, { useState } from "react";
import styles from "./NewsPost.module.css";
import PostButtons from "../home/post/PostButtons";
import { postdata } from "./NewsPosts";
import CloseIcon from "@mui/icons-material/Close";
import EmojiPickerComponent from "../home/post/EmojiPickerComponent";
export default function Post() {
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [newPostText, setNewPostText] = useState("");
  const [posts, setPosts] = useState(postdata);
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const handleFollowToggle = () => {
    setIsFollowing((prevState) => !prevState);
  };
  const handlePostClick = (e) => {
    e.stopPropagation();
    setIsCreatingPost(true);

  };
  const handlePostClose = () => {
    setIsCreatingPost(false);
  };
  const handleEmojiClick = () => {
    setIsEmojiPickerVisible(!isEmojiPickerVisible);
  };

  const handleEmojiSelection = (emoji) => {
    setNewPostText((prevText) => prevText + emoji);
  };

  const handlePostCreation = () => {
    if (newPostText.trim() !== "") {
      const newPost = {
        userProfile: {
          userImage: "URL_TO_USER_IMAGE",
          alt: "User Alt",
          userName: "New User",
        },
        userPost: {
          discription: newPostText,
          postImage: "URL_TO_POST_IMAGE",
          alt: "Post Alt",
        },
      };

      setPosts((prevPosts) => [newPost, ...prevPosts]);
      setNewPostText("");
      setIsCreatingPost(false);
    }
  };
  return (
    <>
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
            placeholder="Create new post"
            className={styles.Input}
            onClick={handlePostClick}
          />
        </label>
      </div>
      <hr />
     
      {postdata.map((data, idx) => (
        <div className={styles.userpost} key={idx}>
          
          <h2>{data.userPost.heading}</h2>
          <div className={styles.userProfile}>
          <hr />
            <div>
              
              <img
                src={data.userProfile.userImage}
                alt={data.userProfile.alt}
                className={styles.profilePic}
              />
              <span className={styles.usern}>{data.userProfile.userName}</span>
              <button
              className={`${styles.followButton} ${
                isFollowing ? styles.whenclick1 : ""
              }`}
              onClick={handleFollowToggle}
            >
              {isFollowing ? "Following" : "Follow +"}
            </button>
            </div>
            
          </div>
          <div className={styles.userpostdata}>
            <p className={styles.discription}>{data.userPost.discription}</p>
            <video loop autoPlay="true" muted
              src={data.userPost.postImage}
              alt={data.userPost.alt}
              className={styles.pstimg}
            />
            <PostButtons />
          </div>
        </div>
      ))}
      </div>
      {isCreatingPost && (
        <div className={styles.popup}>
          <div className={styles.popHeader}>
            <h3 className={styles.poptitle}>Create Post</h3>
            <button onClick={handlePostClose}>
              <CloseIcon />
            </button>
          </div>
          <textarea
            placeholder="What's going on!"
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          />
          <hr />
          <div className={styles.emojis}>
            <i className="fa-regular fa-image"></i>
            <i className="fa-regular fa-face-smile" onClick={handleEmojiClick}></i>
            <i className="fa-regular fa-calendar-days"></i>
            <button className={styles.Postbtn} onClick={handlePostCreation}>Post</button>
          </div>
          <br />
          <br />
          <hr />
        </div>
      )}
      {isEmojiPickerVisible && (
        <EmojiPickerComponent onSelect={handleEmojiSelection} />
      )}
    </>
  );
}
