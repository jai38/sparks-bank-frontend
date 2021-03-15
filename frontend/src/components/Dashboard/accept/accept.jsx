import React from "react";
import stylesDark from "../../../stylesDark";
import stylesLight from "../../../stylesLight";

const Accept = (props) => {
  let [t, trh] = [];
  let styles;
  if (props.getTheme == "dark") {
    styles = stylesDark;
    [t, trh] = ["table-dark", "table-danger"];
  } else {
    styles = stylesLight;
    [t, trh] = ["", "table-primary"];
  }
  let requests = props.requests;
  let newReq = [];
  if (props.requests && props.requests[props.page]) {
    newReq = props.requests[props.page];
  }
  if (!requests) return <div></div>;
  const renderTable = (customer, index) => {
    let tr;
    if (index % 2 == 0) {
      tr = "table-default";
    } else {
      tr = "table-active";
    }
    return (
      <tr className={tr} key={index}>
        <td className="w-25">{customer.name}</td>
        <td className="w-25">{customer.account}</td>
        <td className="w-25">{customer.amount}</td>
        <td className="w-25">
          <div className="d-flex">
            <button
              className="btn btn-success m-3"
              onClick={() => {
                props.getData(customer);
                props.confirmStatus("accept");
              }}
            >
              Accept
            </button>
            <button
              className="btn btn-danger m-3"
              onClick={() => {
                props.getData(customer);
                props.confirmStatus("decline");
              }}
            >
              Decline
            </button>
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div>
      <button
        className="btn p-2"
        style={styles.homeButton}
        onClick={() => props.changeStatus("dashboard")}
      >
        Home
      </button>
      <div className="container">
        <table className={"table table-bordered " + t}>
          <thead>
            <tr className={trh}>
              <th scope="col">Name</th>
              <th scope="col">Account</th>
              <th scope="col">Amount</th>
              <th scope="col">Accept/decline</th>
            </tr>
          </thead>
          <tbody>{newReq.map(renderTable)}</tbody>
        </table>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-warning p-2"
            style={{ width: "10vw" }}
            onClick={props.prevPage}
          >
            Prev
          </button>
          <button
            className="btn btn-success  p-2 "
            style={{ width: "10vw" }}
            onClick={props.nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accept;
