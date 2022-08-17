import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import styles from "../../styles/dailyDiary.module.css"
function DiaryList({ notes, handleAddNote, handleDeleteNote}) {
  return (
    <div className={styles.diary__list}>
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default DiaryList;