import React from 'react'
import styles from './Post.module.css'
export default function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.newPost}>
        <img src="https://i.pinimg.com/564x/ac/18/49/ac18498ee93158817a026a82e8655fa7.jpg" alt="user" className={styles.userDP}/>
      <label htmlFor="userpost"> 
      <input type="text" id='userpost' placeholder="What's going on!" className={styles.Input} />
      </label>

      </div> 
      <hr />

      <div className={styles.emojis}> 
        <i class="fa-regular fa-image" ></i>
        <i class="fa-regular fa-face-smile"></i>
        <i class="fa-regular fa-calendar-days"></i>
        <button className={styles.Postbtn}>Post</button>
      </div>
<hr />
      <div className={styles.userpost}>
      <img src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w" alt="news image"  className={styles.pstimg}/>
      <div className={styles.reactions}>
        <i className="fa-regular fa-heart"></i>
        <i class="fa-regular fa-comment"></i>
        <i class="fa-regular fa-share-from-square"></i><i class="fa-solid fa-repeat"></i>
        <i class="fa-regular fa-bookmark"></i>
      </div>
     </div>
     <div className={styles.userpost}>
     <img src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w" alt="news image"  className={styles.pstimg}/>
      <div className={styles.reactions}>
        <i className="fa-regular fa-heart"></i>
        <i class="fa-regular fa-comment"></i>
        <i class="fa-regular fa-share-from-square"></i>
        <i class="fa-solid fa-repeat"></i>
        <i class="fa-regular fa-bookmark"></i>
      </div>
     </div>
     <div className={styles.userpost}>
     <img src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w" alt="news image"  className={styles.pstimg}/>
      <div className={styles.reactions}>
        <i className="fa-regular fa-heart"></i>
        <i class="fa-regular fa-comment"></i>
        <i class="fa-regular fa-share-from-square"></i>
        <i class="fa-regular fa-bookmark"></i>
      </div>
     </div>
     <div className={styles.userpost}>
     <img src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w" alt="news image"  className={styles.pstimg}/>
      <div className={styles.reactions}>
        <i className="fa-regular fa-heart"></i>
        <i class="fa-regular fa-comment"></i>
        <i class="fa-regular fa-share-from-square"></i>
        <i class="fa-regular fa-bookmark"></i>
      </div>
     </div>
    </div>
  )
}
