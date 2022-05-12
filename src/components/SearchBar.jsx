import React, { useState } from "react";
import styles from "./search.module.css";
const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <div>
      <form className="form" onSubmit={onFormSubmit}>
        <div className={styles.field}>
          <input
            className={styles.inputText}
            type="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="search video"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
