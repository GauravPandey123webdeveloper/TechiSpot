import React from "react";
import NewsPostButtons from "./NewsSideBar/NewsPostButtons";
import { postdata } from "./NewsPosts";
import styles from './NewsPost.module.css'
export default function NewsPost() {
  return (
    <div className={styles.post}>
      {postdata.map((data,idx) => (
        <div className={styles.userpost} key={idx}>
          <div className={styles.profileContainer}>
          </div>
          <div className={styles.userpostdata}>
            <h2>{data.userPost.heading}</h2>
            <p className={styles.discription}>{data.userPost.discription}</p>
            <video autoPlay="true" muted
              src={data.userPost.postImage}
              alt={data.userPost.alt}
              className={styles.pstimg}
            />
            <NewsPostButtons/>
          </div>
        </div>
      ))}
    </div>
  );
}
