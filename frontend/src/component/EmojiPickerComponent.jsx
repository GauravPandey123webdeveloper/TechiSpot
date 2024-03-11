import EmojiPicker from 'emoji-picker-react';
import styles from './EmojiPicker.module.css';
const EmojiPickerComponent = ({ onSelect }) => {
  return (
    <div className={styles.emojiBox} >
    <EmojiPicker onEmojiClick={(e)=>onSelect(e.emoji)} />
  </div>
  );
};

export default EmojiPickerComponent;
