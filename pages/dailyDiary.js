import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import DiaryList from "../components/diary/DiaryList";
import SearchBar from "../components/diary/SearchBar";
import Header from "../components/diary/Header";
import styles from "../styles/dailyDiary.module.css"

function DailyDiary() {
  const [notes, setNotes] = useState([
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);


  //storing diary locally
  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);
		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
    // console.log(notes)
	}, [notes]);


  const addNote = (text) => {
    // console.log(text)
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark__mode"}`}>
      <div className={styles.container}>
        <Header handleDarkMode={setDarkMode} mode={darkMode} />
        <SearchBar handleSearchNote={setSearchText} />
        <DiaryList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default DailyDiary;

// export default function DailyDiary(){
//     return<>
//         <h1>DailyDiary</h1>
//     </>
// }