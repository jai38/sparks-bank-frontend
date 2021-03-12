import React from "react";
import LoginHeader from "./LoginHeader";
import LoginMain from "./LoginMain";
import LoginFooter from "./LoginFooter";
import mirror from "./../../images/mirror.png";
import stylesDark from "../stylesDark";
import stylesLight from "../stylesLight";
const MainContent = (props) => {
  let styles;
  if (props.getTheme == "dark") {
    styles = stylesDark;
  } else {
    styles = stylesLight;
  }
  return (
    <div className="d-flex flex-column" style={styles.BoxLogin}>
      {/* <img src={mirror} style={styles.styleImg} /> */}
      {/* <h1>Hello</h1> */}
      <LoginHeader getTheme={props.getTheme} />
      <LoginMain
        getTheme={props.getTheme}
        changeStatus={props.changeStatus}
        changeEmail={props.changeEmail}
        changePassword={props.changePassword}
        loginForm={props.loginForm}
      />
      <LoginFooter
        getTheme={props.getTheme}
        changeStatus={props.changeStatus}
      />
    </div>
  );
};

export default MainContent;
