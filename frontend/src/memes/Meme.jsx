import React from 'react'
import NavBar from '../component/NavBar'
import styles from './Meme.module.css'
import SideNavMeme from './SideNavMeme'
import PostButtons from './posts/PostButtons'
import { memedata } from './posts/MemesData';
import CloseIcon from "@mui/icons-material/Close";
import EmojiPickerComponent from './posts/EmojiPickerComponent';
import { useState } from 'react'

export default function Meme() {
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [newPostText, setNewPostText] = useState("");
  const [posts, setPosts] = useState(memedata);
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
    setNewPostText("");
    if(isEmojiPickerVisible===true){
      setIsEmojiPickerVisible(!isEmojiPickerVisible)
    }
  };
  const handleEmojiClick = () => {
    if(isCreatingPost===true){
    setIsEmojiPickerVisible(!isEmojiPickerVisible);
    }
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
      if(isEmojiPickerVisible===true){
        setIsEmojiPickerVisible(!isEmojiPickerVisible)
      }
      setPosts((prevPosts) => [newPost, ...prevPosts]);
      setNewPostText("");
      setIsCreatingPost(false);
    }
  };
  return (
    <div className={styles.meme}>
      <NavBar />
      <SideNavMeme/>
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
          <div className={styles.emojis}>
            <i onClick={handlePostClick} className="fa-regular fa-image"></i>
            <i onClick={handleEmojiClick} className="fa-regular fa-face-smile"></i>
            <i className="fa-regular fa-calendar-days"></i>
            <button className={styles.Postbtn} onClick={handlePostClick}>Post</button>
          </div>
          <hr />
     
     
      {memedata.map((data, idx) => (
        <div className={styles.userpost} key={idx}>
          <div className={styles.userProfile}>
            <div>
              <img
                src={data.userProfile.userImage}
                alt={data.userProfile.alt}
                className={styles.profilePic}
              />
              <span>{data.userProfile.userName}</span>
            </div>
            <button
              className={`${styles.followButton} ${
                isFollowing ? styles.whenclick1 : ""
              }`}
              onClick={handleFollowToggle}
            >
              {isFollowing ? "Following" : "Follow +"}
            </button>
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
          <hr />
        </div>
      )}
      {isEmojiPickerVisible && (
        <EmojiPickerComponent onSelect={handleEmojiSelection} />
      )}
    
    </div>
  )
}