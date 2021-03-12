import React from "react";
import stylesDark from "../stylesDark";
import stylesLight from "../stylesLight";
const LoginMain = (props) => {
  let styles;
  if (props.getTheme == "dark") {
    styles = stylesDark;
  } else {
    styles = stylesLight;
  }
  return (
    <main className="d-flex flex-column">
      <form onSubmit={props.loginForm}>
        <div className="input-group mb-3 p-2 m-3" style={styles.InputDiv}>
          <div className="input-group-pretend">
            <span
              className="input-group-text"
              id="basic-addon1"
              style={styles.InputSymbol}
            >
              &#128231;
            </span>
          </div>
          <input
            type="text"
            placeholder="Email"
            style={styles.Input}
            value={props.email}
            onChange={props.changeEmail}
          />
        </div>
        <div className="input-group mb-3 p-2 m-3" style={styles.InputDiv}>
          <div className="input-group-pretend">
            <span
              className="input-group-text"
              id="basic-addon1"
              style={styles.InputSymbol}
            >
              &#128273;
            </span>
          </div>
          <input
            type="password"
            placeholder="Password"
            style={styles.Input}
            value={props.passowrd}
            onChange={props.changePassword}
          />
        </div>
        {/* <div className="p-2 m-3" style={styles.styleButtonDiv}> */}
        <button
          type="submit"
          className="btn btn-danger m-3 p-2"
          style={styles.Button}
        >
          Login
        </button>
      </form>
      {/* </div> */}
    </main>
  );
};

export default LoginMain;
