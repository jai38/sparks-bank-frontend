import React from "react";
import stylesDark from "./stylesDark";
import stylesLight from "./stylesLight";
const confirm = (props) => {
  let styles;
  let inner;
  if (props.getTheme == "dark") {
    styles = stylesDark;
  } else {
    styles = stylesLight;
  }
  if (props.confirm == "accept") {
    inner = `${props.acceptData.amount} will be debited from your account`;
  }
  return (
    <div className="d-flex flex-column" style={styles.confirmBox}>
      <p>
        Are you sure you want to{" "}
        <strong>
          {props.confirm} {props.acceptData.name}'s{" "}
        </strong>
        the request? {inner}
      </p>
      <div>
        <button
          className="btn btn-success m-2"
          onClick={() => {
            props.hideConfirm();
            if (inner) props.payFromRequest();
            else props.declineFromRequest();
          }}
        >
          YES
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => {
            props.hideConfirm();
          }}
        >
          NO
        </button>
      </div>
    </div>
  );
};

export default confirm;
