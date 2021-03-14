import React from "react";
import Profile from "./Profile";
import stylesDark from "../stylesDark";
import stylesLight from "../stylesLight";

const Dashboard = (props) => {
  let styles;
  let profile = "none";
  let data = props.data;
  if (props.profile) {
    profile = "block";
  }
  if (props.getTheme == "dark") {
    styles = stylesDark;
  } else {
    styles = stylesLight;
  }
  return (
    <div
      className="container d-flex flex-column p-3"
      style={styles.BoxDashboard}
    >
      <h2 className="d-flex m-3 p-2" style={styles.Heading}>
        Welcome {data.name}.
      </h2>
      <div className="d-flex" style={styles.sideButtonDiv}>
        <button
          className="btn btn-light m-4"
          style={(styles.allButton, styles.sideButton)}
          onClick={props.profileStatus}
        >
          Profile
        </button>
        <div style={styles.sideLine}></div>
        <button
          onClick={() => {
            props.changeStatus("login");
            props.refreshData();
          }}
          className="btn btn-light m-4"
          style={(styles.allButton, styles.sideButton)}
        >
          logout
        </button>
      </div>
      <div style={{ display: profile }}>
        <Profile
          name={data.name}
          email={data.email}
          account={data.account}
          balance={props.balance}
          getTheme={props.getTheme}
          hideProfile={props.hideProfile}
        />
      </div>
      {/* <button className="btn btn-warning m-3 p-3" style={styles.allButton}>
        Pay
      </button> */}
      <button
        className="btn btn-success m-3 p-3"
        style={styles.allButton}
        onClick={() => props.changeStatus("customer")}
      >
        Customers
      </button>
      <button
        className="btn btn-warning m-3 p-3"
        style={styles.allButton}
        onClick={() => props.changeStatus("accept")}
      >
        Accept Payment
      </button>
      <button
        className="btn btn-primary m-3 p-3"
        style={styles.allButton}
        onClick={() => props.changeStatus("history")}
      >
        Transaction history
      </button>
    </div>
  );
};

export default Dashboard;
