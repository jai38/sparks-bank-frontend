import React from "react";
import stylesDark from "../../stylesDark";
import stylesLight from "../../stylesLight";
const SignupFooter = (props) => {
  let styles;
  if (props.getTheme == "dark") {
    styles = stylesDark;
  } else {
    styles = stylesLight;
  }
  return (
    <footer>
      {/* <hr className="m-4" style={styles.styleLine2} /> */}
      <div className="m-1" style={styles.AlreadyRegister}>
        Already Registered?{" "}
        <button
          onClick={() => props.changeStatus("login")}
          className="badge m-1"
          href=""
          style={styles.Anchor}
        >
          Login
        </button>
      </div>
    </footer>
  );
};

export default SignupFooter;
