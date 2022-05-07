import React from "react";
import styles from "./search.module.css";
class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className={styles.field}>
            <input
              className={styles.inputText}
              type="search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="search video"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
