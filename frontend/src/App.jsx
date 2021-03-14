import React, { Component } from "react";
import Header from "./components/Header";
import Messages from "./components/message";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Pay from "./components/pay";
import Request from "./components/request";
import History from "./components/history";
import Accept from "./components/accept";
import Confirm from "./components/confirm";
import Theme from "./components/theme";
import stylesDark from "./components/stylesDark";
import stylesLight from "./components/stylesLight";
import axios from "axios";
import Customer from "./components/customer";
class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    getTheme: "dark",
    status: "login",
    messages: [],
    backendResponse: [],
    name: "",
    email: "",
    account: "",
    password: "",
    balance: 0,
    profile: false,
    allUsers: [],
    data: {},
    payUser: "",
    requestUser: "",
    amount: "",
    acceptData: {},
    confirmStatus: false,
    confirm: "",
    history: [],
    page: 0,
  };
  messages = [];
  data = {};
  // callBackend() {
  //   axios
  //     .get("localhost:5000/signup")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  // componentWillMount() {
  //   this.callBackend();
  // }
  getSplited = (value, range) => {
    let splited = [];
    let count = 0;
    while (value.length > 0) {
      count++;
      splited.push(value.splice(0, range));
    }
    splited.unshift(count);
    return splited;
  };
  initValues = () => {
    window.location.reload();
  };
  handleTheme = () => {
    let getTheme;
    if (this.state.getTheme == "dark") getTheme = "light";
    else {
      getTheme = "dark";
    }
    this.setState({ getTheme });
  };
  handleStatus = (status) => {
    this.setState({ status });
  };
  handleMessages = (messages) => {
    this.setState({ messages });
  };
  deleteMessage = () => {
    let messages = [];
    this.messages = [];
    this.setState({ messages });
  };
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleAccount = (event) => {
    this.setState({
      account: event.target.value,
    });
  };
  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleSignupForm = (event) => {
    event.preventDefault();
    axios
      .post("/signup", this.state)
      .then((res) => {
        const { status, error } = res.data;
        this.messages.push(error);
        this.setState({ error });
        if (status == "login") {
          window.alert(error);
          this.initValues();
        }
        // this.setState({ status });
        this.handleMessages(this.messages);
        this.setState({ status });
        console.log(error);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleLoginEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  hanldeLoginPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLoginForm = (event) => {
    event.preventDefault();
    axios
      .post("/login", this.state)
      .then((res) => {
        let { allUsers, data, status, error } = res.data;
        this.setState({ allUsers });
        if (error == "success") {
          this.data = data;
          let history = data.history.reverse();
          history = this.getSplited(history, 8);
          let maxHistoryPage = history.shift();
          this.setState({ maxHistoryPage: maxHistoryPage - 1 });
          this.setState({ history });
          let allUsersTable = JSON.parse(JSON.stringify(allUsers.reverse()));
          allUsersTable = this.getSplited(allUsersTable, 4);
          let maxUserPage = allUsersTable.shift();
          this.setState({ allUsersTable });
          this.setState({ maxUserPage: maxUserPage - 1 });
          let requests = data.requests.reverse();
          requests = this.getSplited(requests, 4);
          let maxReqPage = requests.shift();
          this.setState({ maxReqPage: maxReqPage - 1 });
          this.setState({ requests });
          this.setState({ data });
          this.setState({
            name: data.name,
            email: data.email,
            account: data.account,
            password: data.password,
            balance: data.balance,
          });
        }
        this.messages.push(error);
        this.setState({ error });
        if (this.state.error != "success") this.handleMessages(this.messages);
        else {
          this.setState({ messages: [] });
        }
        this.setState({ status });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleProfile = () => {
    this.setState({ profile: true });
  };
  hideProfile = () => {
    this.setState({ profile: false });
  };
  handlePay = (payAccount) => {
    let payUser = {};
    this.state.allUsers.forEach((c) => {
      if (c.account == payAccount) {
        payUser = c;
      }
    });
    if (payAccount == this.state.account) {
      let messages = [];
      messages.push("It is waste to pay yourself");
      this.handleMessages(messages);
    }
    this.setState({ payUser });
  };
  handlePayForm = (event) => {
    this.messages = [];
    event.preventDefault();
    if (this.state.status == "customer") {
      this.handleStatus("customer");
    } else
      axios.post("/pay", this.state).then((res) => {
        const { balance, status, error } = res.data;
        this.messages.push(error);
        if (balance) this.setState({ status, balance });
        this.handleMessages(this.messages);
        this.messages = [];
      });
  };
  handleRequest = (requestAccount) => {
    let requestUser = {};
    this.state.allUsers.forEach((c) => {
      if (c.account == requestAccount) {
        requestUser = c;
      }
    });
    if (requestAccount == this.state.account) {
      let messages = [];
      messages.push("It is waste to request yourself");
      this.handleMessages(messages);
    }
    this.setState({ requestUser });
  };
  handleRequestForm = (event) => {
    this.messages = [];
    event.preventDefault();
    if (this.state.status == "customer") {
      this.handleStatus("customer");
    } else
      axios.post("/request", this.state).then((res) => {
        const { status, error } = res.data;
        this.messages.push(error);
        // if (balance) {
        this.handleMessages(this.messages);
        this.setState({ status });
        // } else {
        // this.handleMessages(this.messages);
        // }
        this.messages = [];
      });
  };
  handleAccept = (data) => {
    this.setState({ acceptData: data });
  };
  handleAmount = (event) => {
    this.setState({ amount: event.target.value });
  };
  handleConfirm = (status) => {
    this.setState({ confirmStatus: true, confirm: status });
  };
  hideConfirm = () => {
    this.setState({ confirmStatus: false });
  };
  handlePayFromRequest = () => {
    this.messages = [];
    axios.post("/payFromRequest", this.state).then((res) => {
      const { balance, status, error } = res.data;
      this.messages.push(error);
      if (balance) {
        this.setState({ status, balance });
      }
      this.handleMessages(this.messages);
      this.messages = [];
    });
  };
  handledeclineFromRequest = () => {
    this.messages = [];
    axios.post("/declineFromRequest", this.state).then((res) => {
      const { status, error } = res.data;
      this.messages.push(error);
      this.setState({ status });
      this.handleMessages(this.messages);
      this.messages = [];
    });
  };
  handleNextPage = () => {
    let status = this.state.status;
    this.messages = [];
    let currentPage = this.state.page;
    currentPage++;
    if (status == "history") {
      if (currentPage <= this.state.maxHistoryPage) {
        this.setState({ page: currentPage });
      } else {
        this.messages.push("This is the last page of your history");
        this.handleMessages(this.messages);
        this.messages = [];
      }
    } else if (status == "customer") {
      if (currentPage <= this.state.maxUserPage) {
        this.setState({ page: currentPage });
      } else {
        this.messages.push("This is the last page of Customers");
        this.handleMessages(this.messages);
        this.messages = [];
      }
    } else if (status == "accept") {
      if (currentPage <= this.state.maxReqPage) {
        this.setState({ page: currentPage });
      } else {
        this.messages.push("This is the last page of Requests");
        this.handleMessages(this.messages);
        this.messages = [];
      }
    }
  };
  handlePrevPage = () => {
    let status = this.state.status;
    this.messages = [];
    if (status == "history") {
      this.messages.push("This is the first page of your history");
    } else if (status == "customer") {
      this.messages.push("This is the first page of Customers");
    } else if (status == "accept") {
      this.messages.push("This is the first page of Requests");
    }
    let currentPage = this.state.page;
    currentPage--;
    if (currentPage >= 0) {
      this.setState({ page: currentPage });
    } else {
      this.handleMessages(this.messages);
      this.messages = [];
    }
  };
  render() {
    let styles;
    let loginStatus = "none";
    let confirmStatus = "none";
    let signupStatus = "none";
    let dashboardStatus = "none";
    let customerStatus = "none";
    let messageStatus = "none";
    let payStatus = "none";
    let requestStatus = "none";
    let historyStatus = "none";
    let acceptStatus = "none";
    if (this.state.getTheme == "dark") {
      styles = stylesDark;
    } else {
      styles = stylesLight;
    }
    if (this.state.messages.length != 0) {
      messageStatus = "block";
    }
    if (this.state.status == "login") {
      loginStatus = "block";
    }
    if (this.state.status == "signup") {
      signupStatus = "block";
    }
    if (this.state.status == "dashboard") {
      dashboardStatus = "block";
    }
    if (this.state.status == "customer") {
      customerStatus = "block";
    }
    if (this.state.status == "accept") {
      acceptStatus = "block";
    }
    if (this.state.status == "history") {
      historyStatus = "block";
    }
    if (this.state.status == "request") {
      requestStatus = "block";
    }
    if (this.state.status == "pay") {
      payStatus = "block";
    }
    if (this.state.confirmStatus) {
      confirmStatus = "block";
    }
    return (
      <div style={styles.root}>
        <Theme getTheme={this.state.getTheme} changeTheme={this.handleTheme} />
        <Header getTheme={this.state.getTheme} />
        <div style={{ display: messageStatus }}>
          <Messages
            messages={this.state.messages}
            messageStatus={this.handleMessages}
            deleteMessage={this.deleteMessage}
            changeStatus={this.handleStatus}
          />
        </div>
        <div style={{ display: loginStatus }}>
          <Login
            getTheme={this.state.getTheme}
            getStatus={this.state.status}
            changeStatus={this.handleStatus}
            changeEmail={this.handleLoginEmail}
            changePassword={this.hanldeLoginPassword}
            loginForm={this.handleLoginForm}
          />
        </div>
        <div style={{ display: signupStatus }}>
          <Signup
            getTheme={this.state.getTheme}
            getStatus={this.state.status}
            changeStatus={this.handleStatus}
            changeName={this.handleName}
            changeEmail={this.handleEmail}
            changeAccount={this.handleAccount}
            changePassword={this.handlePassword}
            signupForm={this.handleSignupForm}
          />
        </div>
        <div style={{ display: dashboardStatus }}>
          <Dashboard
            name={this.state.name}
            email={this.state.email}
            account={this.state.account}
            balance={this.state.balance}
            getTheme={this.state.getTheme}
            getStatus={this.state.status}
            changeStatus={this.handleStatus}
            refreshData={this.initValues}
            data={this.data}
            profileStatus={this.handleProfile}
            profile={this.state.profile}
            hideProfile={this.hideProfile}
          />
        </div>
        <div style={{ display: customerStatus }}>
          <Customer
            getTheme={this.state.getTheme}
            allUsers={this.state.allUsersTable}
            pay={this.handlePay}
            account={this.state.account}
            changeStatus={this.handleStatus}
            request={this.handleRequest}
            page={this.state.page}
            prevPage={this.handlePrevPage}
            nextPage={this.handleNextPage}
          />
        </div>
        <div style={{ display: acceptStatus }}>
          <Accept
            getTheme={this.state.getTheme}
            requests={this.state.requests}
            getData={this.handleAccept}
            page={this.state.page}
            prevPage={this.handlePrevPage}
            nextPage={this.handleNextPage}
            changeStatus={this.handleStatus}
            confirmStatus={this.handleConfirm}
          />
        </div>
        <div style={{ display: historyStatus }}>
          <History
            getTheme={this.state.getTheme}
            changeStatus={this.handleStatus}
            history={this.state.history}
            page={this.state.page}
            prevPage={this.handlePrevPage}
            nextPage={this.handleNextPage}
          />
        </div>
        <div style={{ display: payStatus }}>
          <Pay
            changeStatus={this.handleStatus}
            getTheme={this.state.getTheme}
            payForm={this.handlePayForm}
            changeAmount={this.handleAmount}
            amount={this.state.amount}
            user={this.state.payUser}
          />
        </div>
        <div style={{ display: requestStatus }}>
          <Request
            changeStatus={this.handleStatus}
            getTheme={this.state.getTheme}
            payForm={this.handleRequestForm}
            changeAmount={this.handleAmount}
            amount={this.state.amount}
            user={this.state.requestUser}
          />
        </div>
        <div style={{ display: confirmStatus }}>
          <Confirm
            getTheme={this.state.getTheme}
            confirm={this.state.confirm}
            acceptData={this.state.acceptData}
            payFromRequest={this.handlePayFromRequest}
            declineFromRequest={this.handledeclineFromRequest}
            hideConfirm={this.hideConfirm}
          />
        </div>
      </div>
    );
  }
}

export default App;
