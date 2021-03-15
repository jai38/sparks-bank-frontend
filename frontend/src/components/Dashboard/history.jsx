import React from "react";
import stylesDark from "../../stylesDark";
import stylesLight from "../../stylesLight";
const History = (props) => {
  let [t, trh] = [];
  let styles;
  if (props.getTheme == "dark") {
    styles = stylesDark;
    [t, trh] = ["table-dark", "table-warning"];
  } else {
    styles = stylesLight;
    [t, trh] = ["", "table-primary"];
  }
  let history = [];
  if (props.history && props.history[props.page])
    props.history[props.page].map((c) => {
      let currentHistory = {
        date: c.date,
        name: c.name,
        account: c.account,
        status: c.status,
        amount: c.amount,
      };
      history.push(currentHistory);
    });
  const renderTable = (currentHistory, index) => {
    let tr;
    let bgc;
    if (index % 2 == 0) {
      tr = "table-default";
    } else {
      tr = "table-active";
    }
    if (currentHistory.status == "Debit") {
      bgc = " table-danger";
    } else {
      bgc = " table-success";
    }
    return (
      <tr className={tr + bgc} key={index}>
        <td className="w-25">{currentHistory.date}</td>
        <td className="w-25">{currentHistory.name}</td>
        <td className="w-25">{currentHistory.account}</td>
        <td className="w-25">{currentHistory.status}</td>
        <td className="w-25">{currentHistory.amount}</td>
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
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Account</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>{history.map(renderTable)}</tbody>
        </table>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-warning  p-2"
            style={{ width: "10vw" }}
            onClick={props.prevPage}
          >
            Prev
          </button>
          <button
            className="btn btn-success  p-2"
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

export default History;
