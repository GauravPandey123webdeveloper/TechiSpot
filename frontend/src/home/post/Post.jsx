import React, { useState } from "react";
import styles from "./Post.module.css";
import PostButtons from "./PostButtons";
import { postdata } from "./Posts";
import CloseIcon from "@mui/icons-material/Close";
import EmojiPickerComponent from "./EmojiPickerComponent";
import Upload from "./Upload";
import { Link } from "react-router-dom";

export default function Post() {
  // State for managing post creation
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [newPostText, setNewPostText] = useState("");
  const [posts, setPosts] = useState(postdata);
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const [isUploadVisible, setIsUploadVisible] = useState(false);
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [file, setFile] = useState("");

  // Function to toggle follow status
  const handleFollowToggle = () => {
    setIsFollowing((prevState) => !prevState);
  };

  // Function to handle click on creating a new post
  const handlePostClick = (e) => {
    e.stopPropagation();
    setIsCreatingPost(true);
  };

  // Function to close the new post creation section
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

  // Function to handle click on emoji button
  const handleEmojiClick = () => {
    if (isCreatingPost === true) {
      setIsEmojiPickerVisible(!isEmojiPickerVisible);
    } else {
      setIsCreatingPost(!isCreatingPost);
      setIsEmojiPickerVisible(!isEmojiPickerVisible);
    }
  };

  // Function to handle click on upload button
  const handleUpload = () => {
    if (isCreatingPost === true) {
      setIsUploadVisible(!isUploadVisible);
    } else {
      setIsCreatingPost(!isCreatingPost);
      setIsUploadVisible(!isUploadVisible);
    }
  };

  // Function to handle image upload
  const handleImageUpload = (type, upload) => {
    setFile(upload);
    if (type.startsWith("image")) {
      setImage(upload);
      setVideo("");
    } else {
      setVideo(upload);
      setImage("");
    }
    setIsUploadVisible(false);
  };

  // Function to handle emoji selection
  const handleEmojiSelection = (emoji) => {
    setNewPostText((prevText) => prevText + emoji);
  };

  // Function to create a new post
  const handlePostCreation = () => {
    let mediaURLimg;
    let mediaURLvid;
    if (video === "") {
      mediaURLimg = image;
    } else if (image === "") {
      mediaURLvid = video;
    }
    if (newPostText.trim() !== "" || mediaURLimg || mediaURLvid) {
      const newPost = {
        userProfile: {
          userImage:
            "https://i.pinimg.com/474x/bd/26/b7/bd26b704fca0c5e3fe68f10322bf65c0.jpg",
          alt: "User Alt",
          userName: localStorage.getItem("username"),
        },
        userPost: {
          discription: newPostText,
          postImage: mediaURLimg,
          postVideo: mediaURLvid,
          alt: "post",
        },
      };
      if (isEmojiPickerVisible === true) {
        setIsEmojiPickerVisible(false);
      }
      if (isUploadVisible === true) {
        setIsUploadVisible(false);
      }
      postdata.unshift(newPost);
      setNewPostText("");
      setImage("");
      setVideo("");
      setFile("");
      setIsCreatingPost(false);
      setPosts([...posts], postdata);
    }
  };

  return (
    <>
      {/* User post creation section */}
      {isCreatingPost && <div className={styles.blank}></div>}
      <div className={styles.post}>
        <div className={styles.newPost}>
          <img
            src="https://i.pinimg.com/564x/ac/18/49/ac18498ee93158817a026a82e8655fa7.jpg"
            alt="user"
            className={styles.userDP}
          />
          {/* New post creation input box */}
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

        {/* Mapping through existing posts */}
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
              <Link
                to={`/profile/${data.userProfile.userName}`}
                className={styles.userName}
              >
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

              {data.userPost.postImage && (
                <img
                  src={data.userPost.postImage}
                  alt={data.userPost.alt}
                  className={styles.pstimg}
                />
              )}
              {data.userPost.postVideo && (
                <video
                  src={data.userPost.postVideo}
                  alt={data.userPost.alt}
                  className={styles.pstimg}
                  controls
                />
              )}
              {/* PostButtons for handling all the activities user wants to perform on a published post.
              Ex: Like, Share the post, Comment on the Post */}
              <PostButtons />
            </div>
          </div>
        ))}
      </div>
      {/* When user wants to create a new post and clicks on "Create New Post Section" */}
      {isCreatingPost && (
        <div className={styles.popup}>
          <div className={styles.popHeader}>
            <h3 className={styles.poptitle}>Create Post</h3>
            <button onClick={handlePostClose}>
              <CloseIcon />
            </button>
          </div>
          <div>
            {/* Text area for post content */}
            <textarea
              placeholder="What do you want to talk about ?"
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
            />
            {/* Display uploaded image or video */}
            {image === "" ? (
              video === "" ? (
                ""
              ) : (
                <video src={video} controls alt="Uploaded Video" className={styles.postimgvid}/>
              )
            ) : (
              <img src={image} alt="Uploaded Pic" className={styles.postimgvid}/>
            )}
          </div>
          <hr />
          {/* Icons for uploading media, adding emoji, and posting */}
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
      {/* When either the user directly clicks on the emoji button (or clicks on the emoji button when inside of the create post section) to open the emoji tray */}
      {isEmojiPickerVisible && (
        <EmojiPickerComponent onSelect={handleEmojiSelection} />
      )}
      {/* When the user wants to upload something with their post */}
      {isUploadVisible && (
        <div className={styles.popup}>
          <div className={styles.popHeader}>
            <h3 className={styles.poptitle}>Upload</h3>
            <button onClick={() => setIsUploadVisible(false)}>
              <CloseIcon />
            </button>
          </div>
          {/* Component for handling file upload */}
          <Upload handleImageUpload={handleImageUpload} />
        </div>
      )}
    </>
  );
}