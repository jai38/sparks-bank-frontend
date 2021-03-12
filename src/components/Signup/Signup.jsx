import React from "react";
import SignupHeader from "./SignupHeader";
import SignupMain from "./SignupMain";
import SignupFooter from "./SignupFooter";
import stylesDark from "../stylesDark";
import stylesLight from "../stylesLight";
const Signup = (props) => {
  let styles;
  if (props.getTheme == "dark") {
    styles = stylesDark;
  } else {
    styles = stylesLight;
  }
  return (
    <div className="d-flex flex-column container" style={styles.BoxSignup}>
      <SignupHeader getTheme={props.getTheme} />
      <SignupMain
        getTheme={props.getTheme}
        changeName={props.changeName}
        changeEmail={props.changeEmail}
        changeAccount={props.changeAccount}
        changePassword={props.changePassword}
        signupForm={props.signupForm}
        messageStatus={props.messageStatus}
      />
      <SignupFooter
        getTheme={props.getTheme}
        changeStatus={props.changeStatus}
        messageStatus={props.messageStatus}
      />
    </div>
  );
};

export default Signup;
