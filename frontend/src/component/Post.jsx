import React, { useState } from "react";
import styles from "./Post.module.css";
export default function Post() {
  const [like, setlike] = useState(),
    [islike, setislike] = useState(false),
    onchangelikesubmit = () => {
      setlike(like + (islike ? -1 : 1));
      setislike(!islike);
    };

  return (
    <div className={styles.post}>
      <div className={styles.userpost}>
        <img
          src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w"
          alt="news pic"
          className={styles.pstimg}
        />
        <div className={styles.reactions}>
          <p className={islike ? styles["fa-heart"] : ""}>
            <i className="fa-regular fa-heart" onClick={onchangelikesubmit}></i>
          </p>
          {/* <p className={styles.x}>{like}</p>////if want to print how many likes are present */}

          <i className="fa-regular fa-comments"></i>
          <i className="fa-regular fa-share-from-square"></i>
        </div>
      </div>

      <div className={styles.userpost}>
        <img
          src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w"
          alt="news pic"
          className={styles.pstimg}
        />
        <div className={styles.reactions}>
          <p className={islike ? styles["fa-heart"] : ""}>
            <i className="fa-regular fa-heart" onClick={onchangelikesubmit}></i>
          </p>
          {/* <p className={styles.x}>{like}</p>////if want to print how many likes are present */}

          <i className="fa-regular fa-comments"></i>
          <i className="fa-regular fa-share-from-square"></i>
        </div>
      </div>

      <div className={styles.userpost}>
        <img
          src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w"
          alt="news pic"
          className={styles.pstimg}
        />
        <div className={styles.reactions}>
          <p className={islike ? styles["fa-heart"] : ""}>
            <i className="fa-regular fa-heart" onClick={onchangelikesubmit}></i>
          </p>
          {/* <p className={styles.x}>{like}</p>////if want to print how many likes are present */}

          <i className="fa-regular fa-comments"></i>
          <i className="fa-regular fa-share-from-square"></i>
        </div>
      </div>
    </div>
  );
}
