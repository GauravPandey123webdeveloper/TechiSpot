import React, { useState, useEffect, useRef } from "react";
import styles from "./Post.module.css";
import Heart from "react-animated-heart";
import { useCopyToClipboard } from "usehooks-ts";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

export default function PostButtons() {
  const [click, setClick] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isCommentsPost, setIsCommentsPost] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /* useState to check whether the share button is clicked */
  const [share, setShare] = useState(false);
  /*useState to store the url of the page (or url of the individual post in the future) */
  const [urlLink, setUrlLink] = useState("");
  /*used hook : useCopyToClipboard() to enable copy functionality */
  const [value, copy] = useCopyToClipboard();
  /*useState to store the current amount of side scrolling of the social icons in the share section */
  const [scrollAmount, setScrollAmount] = useState(0);
  /* used hook : useRef() which will give the direct access to the container's DOM element */
  const containerReference = useRef();

  useEffect(() => {
    if (localStorage.getItem("username") !== null) {
      setIsLoggedIn(true);
    } else {
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
    } else {
      alert("Please log in to comment .");
    }
  }

  function handleCommentClose() {
    setIsCommentsPost(false);
  }

  function handleComments() {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  }
  /* Function to handle the retrieval of page link when share button on the post card is clicked*/
  function handleShare() {
    setShare((prevShare) => !prevShare);
    setUrlLink(window.location.href);
  }
  /*Function to handle side scrolling of socials icon in share section */
  function handleScroll(amt) {
    /*Updating the scroll position or scrolling amount (initially 0) */
    const newPosition = Math.floor(scrollAmount / 115) * 115 + amt;
    setScrollAmount(newPosition);
    /* Using the variable containerReference (which stores the direct reference to conatiner of social icons) to make use of the scrollLeft property */
    containerReference.current.scrollLeft = newPosition;
  }

  return (
    <div className={styles.reactions}>
      <div className={styles.likeContainer}>
        <Heart onClick={handleLikeToggle} filled={click} />
        <span className={styles.likeCount}>{likeCount}</span>
      </div>
      <i onClick={handleCommentClick} className="fa-regular fa-comments"></i>
      <i onClick={handleShare} className="fa-regular fa-share-from-square"></i>
      <i className="fa-regular fa-bookmark"></i>
      {/*When user clicks on the comment button inside the post card */}
      {isCommentsPost && (
        <div>
          <div className={styles.popup}>
            <div className={styles.popHeader}>
              <h3 className={styles.poptitle}>Comments</h3>
              <button onClick={handleCommentClose}>close</button>
            </div>
            {comments.map((value, index) => (
              <table key={index}>
                <tr>
                  <td>
                    <img
                      className={styles.profileImg}
                      src="https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s="
                      alt="pho"
                      height="40px"
                      width="40px"
                    />
                  </td>
                  <td>
                    <tr>
                      <td>{localStorage.getItem("username")}</td>
                    </tr>
                    <tr>
                      <td>{value}</td>
                    </tr>
                  </td>
                </tr>
              </table>
            ))}
          </div>
          <div className={styles.commentsInput}>
            <input
              placeholder="Add a comment"
              className={styles.commInp}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></input>
            <button className={styles.postBtn} onClick={handleComments}>
              Post
            </button>
          </div>
        </div>
      )}
      {/*When user clicks on the share button inside the post card */}
      {share && (
        <div onClick={handleShare} className={styles.share_overlay}>
          <div
            className={styles.share_container}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={styles.close_share_btn}>
              <i onClick={handleShare} className="fa-solid fa-xmark"></i>
            </div>
            {/*Share box heading */}
            <h2 className={styles.share_heading}>Share!</h2>
            <hr className={styles.line} />
            {/* Container for all the socail share icons */}
            <div
              className={styles.socials}
              ref={containerReference}
              /*Using onScroll event listener to dynamically change the current scroll amount(in simple terms to automatically adjust the scrolling amount if the user scroll using scroll wheel of the mouse and not by using the left and right buttons given in the share section) */
              onScroll={() => {
                setScrollAmount(containerReference.current.scrollLeft);
              }}
            >
              {scrollAmount > 0 && (
                <button
                  className={`${styles.scroll_btn} ${styles.left}`}
                  onClick={() => {
                    handleScroll(-115);
                  }}
                >
                  &#65308;
                </button>
              )}
              {/*Used react-share library to get icons{as components} and their respective wrapper components */}
              <EmailShareButton url={urlLink}>
                <EmailIcon size={85} round={true} />
                Email
              </EmailShareButton>
              <WhatsappShareButton url={urlLink}>
                <WhatsappIcon size={85} round={true} />
                Whatsapp
              </WhatsappShareButton>
              <FacebookShareButton url={urlLink}>
                <FacebookIcon size={85} round={true} />
                Facbook
              </FacebookShareButton>
              <LinkedinShareButton url={urlLink}>
                <LinkedinIcon size={85} round={true} />
                LinkedIn
              </LinkedinShareButton>
              <TwitterShareButton url={urlLink}>
                <XIcon size={85} round={true} />X
              </TwitterShareButton>
              <RedditShareButton url={urlLink}>
                <RedditIcon size={85} round={true} />
                Reddit
              </RedditShareButton>
              <TelegramShareButton url={urlLink}>
                <TelegramIcon size={85} round={true} />
                Telegram
              </TelegramShareButton>
              <PinterestShareButton url={urlLink}>
                <PinterestIcon size={85} round={true} />
                Pinterest
              </PinterestShareButton>
              {scrollAmount < 450 && (
                <button
                  className={`${styles.scroll_btn} ${styles.right}`}
                  onClick={() => {
                    handleScroll(115);
                  }}
                >
                  &#65310;
                </button>
              )}
            </div>
            <hr className={styles.line} />
            {/*Container for copy Link section */}
            <div className={styles.copy_link}>
              <input
                type="text"
                className={styles.link}
                value={urlLink}
                disabled
              />
              <button
                className={styles.copy_btn}
                onClick={() => {
                  copy(urlLink);
                }}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
