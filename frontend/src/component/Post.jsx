import React from 'react'
import styles from './Post.module.css'
export default function Post() {
  return (
    <div className={styles.post}>
     <div className={styles.userpost}>

     <div className={styles.profileContainer}>
     <div>
        <img src="https://i.pinimg.com/474x/bd/26/b7/bd26b704fca0c5e3fe68f10322bf65c0.jpg" alt="Profile Picture" className={styles.profilePic} />
         TechiSpot <button className={styles.followButton}>Follow +</button>
          <p className={styles.bio}>Hello, This is a post. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quam omnis sunt explicabo temporibus provident. Recusandae, dolorem nisi. Sunt necessitatibus qui dolore, consequatur doloribus nam? Perferendis commodi sunt minima aliquam?</p>
           
        </div>
      </div>
      <img src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w" alt="news image"  className={styles.pstimg}/>
      <div className={styles.reactions}>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-comments"></i>
        <i className="fa-regular fa-share-from-square"></i>
      </div>
     </div>
     <div className={styles.userpost}>
      <img src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w" alt="news image"  className={styles.pstimg}/>
      <div className={styles.reactions}>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-comments"></i>
        <i className="fa-regular fa-share-from-square"></i>
      </div>
     </div>
     <div className={styles.userpost}>
     <img src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w" alt="news image"  className={styles.pstimg}/>
      <div className={styles.reactions}>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-comments"></i>
        <i className="fa-regular fa-share-from-square"></i>
      </div>
     </div>
     <div className={styles.userpost}>
     <img src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w" alt="news image"  className={styles.pstimg}/>
      <div className={styles.reactions}>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-comments"></i>
        <i className="fa-regular fa-share-from-square"></i>
      </div>
     </div>
    </div>
  )
}

