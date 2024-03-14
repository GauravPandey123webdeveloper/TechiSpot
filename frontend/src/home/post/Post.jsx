import React, { useState } from "react";
import styles from "./Post.module.css";
import PostButtons from './PostButtons'
import { postdata } from "./Posts";
import CloseIcon from "@mui/icons-material/Close";
import EmojiPickerComponent from "./EmojiPickerComponent";
import Upload from "./Upload";
import { Link } from "react-router-dom";
export default function Post() {
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [newPostText, setNewPostText] = useState("");
  const [posts, setPosts] = useState(postdata);
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const [isUploadVisible, setIsUploadVisible] = useState(false);

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
    if (isEmojiPickerVisible === true) {
      setIsEmojiPickerVisible(false);
    }
    if (isUploadVisible === true) {
      setIsUploadVisible(false);
    }
  };

  const handleUploadClose = () => {
    setIsUploadVisible(false);
  };

  const handleEmojiClick = () => {
    if (isCreatingPost === true) {
      setIsEmojiPickerVisible(!isEmojiPickerVisible);
    }
    else {
      setIsCreatingPost(!isCreatingPost);
      setIsEmojiPickerVisible(!isEmojiPickerVisible);
    }
  };

  const handleUpload = () => {
    if (isCreatingPost === true) {
      setIsUploadVisible(!isUploadVisible);
    } else {
      setIsCreatingPost(!isCreatingPost);
      setIsUploadVisible(!isUploadVisible);
    }
  };

  const handleEmojiSelection = (emoji) => {
    setNewPostText((prevText) => prevText + emoji);
  };

  const handlePostCreation = () => {
    if (newPostText.trim() !== "") {
      // console.log(newPostText)
      const newPost = {
        userProfile: {
          userImage: 'https://i.pinimg.com/474x/bd/26/b7/bd26b704fca0c5e3fe68f10322bf65c0.jpg',
          alt: "User Alt",
          userName: localStorage.getItem("username"),
        },
        userPost: {
          discription: newPostText,
          postImage:'https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w',
          alt: "Post Alt",
        },
      };
      if (isEmojiPickerVisible === true) {
        setIsEmojiPickerVisible(false);
      }
      if (isUploadVisible === true) {
        setIsUploadVisible(false);
      }
      postdata.unshift(newPost);
      // setPosts([newPost, ...posts]);
      // console.log("postdata after pushing new post:", postdata);

      // localStorage.setItem("postdata", JSON.stringify(postdata));
      // console.log("postdata in localStorage:", localStorage.getItem("postdata"));
      setNewPostText("");
      setIsCreatingPost(false);
    }
  };

  return (
    <>
      {/*User post creation section */}
      {isCreatingPost && <div className={styles.blank}></div>}
      <div className={styles.post}>
        <div className={styles.newPost}>
          <img
            src="https://i.pinimg.com/564x/ac/18/49/ac18498ee93158817a026a82e8655fa7.jpg"
            alt="user"
            className={styles.userDP}
          />
          {/*New post creation input box */}
          <label htmlFor="userpost">
            <input
              type="text"
              id="userpost"
              placeholder="Create new post"
              className={styles.Input}
              readOnly
              onClick={handlePostClick}
            />
          </label>
        </div>
        <hr />

        {postdata.map((data, idx) => ( 
          <div className={styles.userpost} key={idx}>
            <div className={styles.userProfile}>
              <Link to={`/profile/${data.userProfile.userName}`}>
                <img
                  src={data.userProfile.userImage}
                  alt={data.userProfile.alt}
                  className={styles.profilePic}
                />
              </Link>
              <Link to={`/profile/${data.userProfile.userName}`} className={styles.userName}>
                <span>{data.userProfile.userName}</span>
               </Link>

              <button
                className={`${styles.followButton} ${
                  isFollowing ? styles.whenclick1 : ""
                }`}
                onClick={handleFollowToggle}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
            <div className={styles.userpostdata}>
              <p className={styles.discription}>{data.userPost.discription}</p>
              <img
                src={data.userPost.postImage}
                alt={data.userPost.alt}
                className={styles.pstimg}
              />
              {/*PostButtons for handling all the activites user wants to perform on a published post.
              Ex : Like, Share the post , Comment on the Post */}
              <PostButtons />
            </div>
          </div>
        ))}
      </div>
      {/* When user want to create an new post and clicks on "Create New Post Section" */}
      {isCreatingPost && (
        <div className={styles.popup}>
          <div className={styles.popHeader}>
            <h3 className={styles.poptitle}>Create Post</h3>
            <button onClick={handlePostClose}>
              <CloseIcon />
            </button>
          </div>
          <textarea
            placeholder="   What's going on!"
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          />
          <hr />
          <div className={styles.emojis}>
            <i className="fa-regular fa-image" onClick={handleUpload}></i>
            <i
              className="fa-regular fa-face-smile"
              onClick={handleEmojiClick}
            ></i>
            <i className="fa-regular fa-calendar-days"></i>
            <button className={styles.Postbtn} onClick={handlePostCreation}>
              Post
            </button>
          </div>
          <hr />
        </div>
      )}
      {/*When either user directly clicks on emoji button (or click on the emoji button when inside of create post section) to open emoji tray*/}
      {isEmojiPickerVisible && (
        <EmojiPickerComponent onSelect={handleEmojiSelection} />
      )}
      {/*When User want to upload something with their post */}
      {isUploadVisible && (
        <div className={styles.popup}>
          <div className={styles.popHeader}>
            <h3 className={styles.poptitle}>Upload</h3>
            <button onClick={handleUploadClose}>
              <CloseIcon />
            </button>
          </div>
          <Upload />
        </div>
      )}
    </>
  );
}
