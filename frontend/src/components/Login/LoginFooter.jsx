import React from "react";
import stylesDark from "../stylesDark";
import stylesLight from "../stylesLight";
const LoginFooter = (props) => {
  let styles;
  if (props.getTheme == "dark") {
    styles = stylesDark;
  } else {
    styles = stylesLight;
  }
  return (
    <footer>
      <a className="d-flex badge m-1" style={styles.ForgetPassword} href="#">
        Forget password?
      </a>
      <hr className="m-4" style={styles.Line2} />
      <div className="m-1" style={styles.CreateOne}>
        Dont have an account?{" "}
        <button
          className="badge m-1"
          href=""
          onClick={() => props.changeStatus("signup")}
          style={styles.Anchor}
        >
          Create One
        </button>
      </div>
    </footer>
  );
};

export default LoginFooter;
