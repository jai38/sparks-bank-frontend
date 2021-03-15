import React from "react";
import stylesDark from "../stylesDark";
import stylesLight from "../stylesLight";
const Theme = (props) => {
  let styles = stylesDark;
  let status;
  if (props.getTheme == "dark") {
    status = "🌙";
  } else {
    status = "🌞";
  }
  return (
    <button
      className="btn"
      style={styles.themeButton}
      onClick={() => props.changeTheme()}
    >
      {status}
    </button>
  );
};

export default Theme;
