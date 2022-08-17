import React from "react";
import { MdDeleteForever } from "react-icons/md";
import styles from "../../styles/dailyDiary.module.css"
function Note({id, text, date, handleDeleteNote}) {
  return (
    <div className={styles.note}>
      <span>{text}</span>
      <div className={styles.note__footer}>
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => {
            console.log(id);
            handleDeleteNote(id)}
        }
          className={styles.delete__icon}
          size="1.3em"
        />
      </div>
    </div>
  );
}

export default Note;