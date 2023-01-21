import React, { useState } from "react";
import "./styles.css";
import daily from "./daily.jpg";
import book from "./images (1).png";
import Notes from "../src/compoment/Notes/notes";
import Book from "../src/compoment/Bookmark/book";

const App = () => {
  const [tab, setTab] = useState("notes");

  const handleTabChange = (e) => {
    setTab(e.target.value);
  };

  return (
    <div>
      <div className="tab">
        <div className="daily">Daily Notes</div>
        <button value="notes" onClick={handleTabChange}>
          <img src={daily} alt="img" /> Notes
        </button>
        <button value="bookmarks" onClick={handleTabChange}>
          <img src={book} alt="img" /> Bookmarks
        </button>
      </div>

      {tab === "notes" && <Notes />}
      {tab === "bookmarks" && <Book />}
    </div>
  );
};

export default App;
