import React from "react";
import stylesLight from "../../../stylesLight";
import stylesDark from "../../../stylesDark";
const Search = (props) => {
  let styles;
  if (props.getTheme == "dark") {
    styles = stylesDark;
  } else {
    styles = stylesLight;
  }
  return (
    <div className="input-group mb-3 p-2" style={styles.searchDiv}>
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          🔍
        </span>
      </div>
      <input
        className="form-control bg-transparent "
        type="text"
        name="search"
        placeholder="Search Here"
        style={styles.searchInput}
        value={props.search}
        onChange={props.changeSearch}
      />
    </div>
  );
};

export default Search;
