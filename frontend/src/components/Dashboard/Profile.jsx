import React from "react";
import stylesDark from "../../stylesDark";
import stylesLight from "../../stylesLight";

const Profile = (props) => {
  let styles;
  if (props.getTheme == "dark") {
    styles = stylesDark;
  } else {
    styles = stylesLight;
  }
  return (
    <span className="d-flex flex-column" style={styles.profileDiv}>
      <p className="m-2 p-2 h5">Name: {props.name}</p>
      <p className="m-2 p-2 h5">Email: {props.email}</p>
      <p className="m-2 p-2 h5">Account: {props.account}</p>
      <p className="m-2 p-2 h5">Balance: {props.balance}</p>
      <button
        className="btn m-2"
        style={styles.crossButton}
        onClick={() => props.hideProfile()}
      >
        X
      </button>
    </span>
  );
};

export default Profile;
