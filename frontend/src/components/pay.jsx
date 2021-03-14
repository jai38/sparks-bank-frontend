import React from "react";
import stylesDark from "./stylesDark";
import stylesLight from "./stylesLight";
const Pay = (props) => {
  let styles;
  let user = props.user;
  if (props.getTheme == "dark") {
    styles = stylesDark;
  } else {
    styles = stylesLight;
  }
  return (
    <div
      className="container d-flex flex-column w-25 justify-content-center"
      style={styles.prBox}
    >
      <form onSubmit={props.payForm}>
        <p className="m-2 p-2">Paying to:</p>
        <p className="m-2 p-2">
          Name :{" "}
          <strong>
            <u>{user.name}</u>
          </strong>
        </p>
        <p className="m-2 p-2">
          Account No:{" "}
          <strong>
            <u>{user.account}</u>
          </strong>
        </p>
        <p className="m-2 p-2">
          Enter Amount:{" "}
          <input
            type="Number"
            onChange={props.changeAmount}
            value={props.amount}
            name="amount"
            required="true"
          />
        </p>
        <div className="d-flex justify-content-around m-4">
          <button
            className="btn btn-danger w-25 p-2"
            onClick={() => props.changeStatus("customer")}
          >
            Back
          </button>
          <button type="submit" className="btn btn-success w-25 p-2">
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default Pay;
