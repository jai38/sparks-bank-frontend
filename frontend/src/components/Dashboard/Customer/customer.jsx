import React from "react";
import Search from "./search";
import stylesDark from "../../../stylesDark";
import stylesLight from "../../../stylesLight";
const Customer = (props) => {
  let [t, trh] = [];
  let styles;
  if (props.getTheme == "dark") {
    styles = stylesDark;
    [t, trh] = ["table-dark", "table-danger"];
  } else {
    styles = stylesLight;
    [t, trh] = ["", "table-primary"];
  }
  let allUsers = [];
  if (props.allUsers && props.allUsers[props.page])
    props.allUsers[props.page].map((c) => {
      let currentUser = {
        name: c.name,
        email: c.email,
        account: c.account,
      };
      allUsers.push(currentUser);
    });
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
        <td className="w-25">{customer.email}</td>
        <td className="w-25">{customer.account}</td>
        <td className="w-25">
          <div className="d-flex">
            <button
              className="btn btn-success m-3"
              onClick={() => {
                if (customer.account == props.account)
                  props.changeStatus("customer");
                else props.changeStatus("request");
                props.request(customer.account);
              }}
            >
              Request
            </button>
            <button
              className="btn btn-danger m-3"
              onClick={() => {
                if (customer.account == props.account)
                  props.changeStatus("customer");
                else props.changeStatus("pay");
                props.pay(customer.account);
              }}
            >
              Pay
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
      <Search
        getTheme={props.getTheme}
        search={props.search}
        changeSearch={props.changeSearch}
      />
      <div className="container">
        <table className={"table table-bordered " + t}>
          <thead>
            <tr className={trh}>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Account No.</th>
              <th scope="col">Transfer</th>
            </tr>
          </thead>
          <tbody>{allUsers.map(renderTable)}</tbody>
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

export default Customer;
