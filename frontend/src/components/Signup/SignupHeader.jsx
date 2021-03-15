import React from "react";
import stylesDark from "../../stylesDark";
import stylesLight from "../../stylesLight";
const SignupHeader = (props) => {
  let styles;
  if (props.getTheme == "dark") {
    styles = stylesDark;
  } else {
    styles = stylesLight;
  }
  return (
    <header style={{ width: "100%" }}>
      <h1 className="d-flex m-3" style={styles.Heading}>
        Signup
      </h1>
      <hr className="m-2" style={styles.Line} />
    </header>
  );
};

export default SignupHeader;
