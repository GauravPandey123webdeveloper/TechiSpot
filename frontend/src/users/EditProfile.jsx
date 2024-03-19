import styles from "./EditProfile.module.css";
import { postdata } from "../home/post/Posts";
import { useNavigate, useParams } from "react-router-dom";

import { useState } from "react";

const EditProfile = () => {
  const { id } = useParams();
  const [edit, setEdit] = useState({
    userName: "",
    userImage: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    postdata[id].userProfile.userName = edit.userName;
    postdata[id].userProfile.userImage = edit.userImage;
    navigate("/");
  };

  const handleEdit = (event) => {
    event.preventDefault();
    setEdit({ ...edit, [event.target.id]: event.target.value });
  };

  return (
    <div id={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <h1>Edit User Profile</h1>
        <div className={styles.inputBox}>
          <label htmlFor="username" className={styles.label}>
            Username:
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="Edit Your Name"
            onChange={handleEdit}
            id="userName"
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="userImage" className={styles.label}>
            Profile Picture:
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="Upload Your Image Link"
            onChange={handleEdit}
            id="userImage"
          />
        </div>
        <button>save</button>
      </form>
    </div>
  );
};

export default EditProfile;
