import React from "react";
import stylesDark from "../../stylesDark";
import stylesLight from "../../stylesLight";
const SignupMain = (props) => {
  let styles;
  if (props.getTheme == "dark") {
    styles = stylesDark;
  } else {
    styles = stylesLight;
  }
  return (
    <main className=" container d-flex flex-column m-2">
      <form onSubmit={props.signupForm}>
        <div className="input-group mb-3 m-2" style={styles.SignupInputDiv}>
          <div className="input-group-pretend">
            <span className="input-group-text" style={styles.InputSymbol}>
              &#128231;
            </span>
          </div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            style={styles.Input}
            value={props.name}
            onChange={props.changeName}
          />
        </div>
        <div className="input-group mb-3 m-2" style={styles.SignupInputDiv}>
          <div className="input-group-pretend">
            <span className="input-group-text" style={styles.InputSymbol}>
              &#128231;
            </span>
          </div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            style={styles.Input}
            value={props.email}
            onChange={props.changeEmail}
          />
        </div>

        <div className="input-group mb-3 m-2" style={styles.SignupInputDiv}>
          <div className="input-group-pretend">
            <span className="input-group-text" style={styles.InputSymbol}>
              👤
            </span>
          </div>
          <input
            type="number"
            placeholder="Account No."
            name="account"
            style={styles.Input}
            value={props.account}
            onChange={props.changeAccount}
          />
        </div>
        <div className="input-group mb-3 m-2" style={styles.SignupInputDiv}>
          <div className="input-group-pretend">
            <span className="input-group-text" style={styles.InputSymbol}>
              &#128273;
            </span>
          </div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            style={styles.Input}
            value={props.password}
            onChange={props.changePassword}
          />
        </div>
        {/* <div className="p-2 m-3" style={styles.styleButtonDiv}> */}
        <button
          type="submit"
          className="btn btn-danger m-3 p-2"
          style={styles.SignupButton}
        >
          Get Started
        </button>
      </form>
      {/* </div> */}
    </main>
  );
};

export default SignupMain;
