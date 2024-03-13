import React, { useState } from 'react';
import styles from './SideBar.module.css';
import Communities from '../home/community/Communities';
import { Modal, Button, Input } from '@mui/material';

export default function SideBar() {
  const [openModal, setOpenModal] = useState(false);
  const [newCommunityName, setNewCommunityName] = useState('');

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSaveCommunity = () => {
    // Implement logic to save the new community
    console.log('Saving community:', newCommunityName);
    setNewCommunityName(''); // Clear the input field
    setOpenModal(false); // Close the modal
  };

  return (
    <div className={styles.community}>
      <div className={styles.box}>
        <h1 className={styles.commhead}>Community</h1>
        <button className={`${styles.iconButton}`} onClick={handleOpenModal}>
          <i className={`fa-regular fa-plus`}></i>
        </button>
      </div>
      <div className={styles.chats}>
        <Communities />
      </div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <div className={styles.modalContent}>
          <h2>Add Community</h2>
          <label for="communityNameInput"> 
          <input
            type="text"
            id="communityNameInput"
            placeholder="Community Name"
            value={newCommunityName}
            onChange={(e) => setNewCommunityName(e.target.value)}
          />
          </label>
          <br /> <br />
          <div className={styles.saveNDcancel}>
            <Button variant="contained" onClick={handleCloseModal}>
              Cancel
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveCommunity}
              style={{ marginRight: '10px' }}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
