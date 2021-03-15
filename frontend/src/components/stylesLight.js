const changeTheme = () => {
  console.log("theme changed");
};
let styles = {
  root: {
    backgroundColor: "#91a6f0",
    height: "100vh",
  },
  BoxLogin: {
    position: "relative",
    width: "40%",
    left: "30%",
    paddingBottom: "2%",
    backgroundColor: "#91a6f0",
    backgroundImage: "linear-gradient(to right, #91a6f0, #ffffff 45%, #91a6f0)",
    // #91a6ff
  },
  Img: {
    position: "absolute",
    width: "78%",
  },
  BoxSignup: {
    width: "50%",
    paddingLeft: 0,
    paddingRight: 0,
    backgroundImage:
      "linear-gradient(to right, #91a6f0 0%, #ffffff 54%, #91a6f0)",
    backgroundColor: "#91a6f0",
  },
  BoxDashboard: {
    backgroundImage:
      "linear-gradient(to right, #91a6f0 0%, #ffffff 54%, #91a6f0)",
    backgroundColor: "#91a6f0",
  },
  profileDiv: {
    position: "absolute",
    top: "30%",
    left: "2%",
    width: "25vw",
    color: "black",
    border: "solid",
    // backgroundColor: "#bcc8f6",
    borderColor: "black",
    borderRadius: "30px",
  },
  Heading: {
    justifyContent: "center",
    color: "black",
  },
  Line: {
    backgroundColor: "black",
    padding: 2,
  },
  InputDiv: {
    justifyContent: "center",
  },
  SignupInputDiv: {
    justifyContent: "center",
    // left: "5%",
  },
  Input: {
    color: "black",
    paddingLeft: 20,
    backgroundColor: "white",
    width: "18vw",
    fontSize: "120%",
  },
  Button: {
    position: "relative",
    left: "25%",
    width: "19vw",
    backgroundColor: "#91a6f0",
    borderColor: "#91a6f0",
    color: "black",
  },
  SignupButton: {
    position: "relative",
    left: "28%",
    width: "20vw",
    backgroundColor: "#91a6f0",
    borderColor: "#91a6f0",
    color: "black",
  },
  allButton: {
    position: "relative",
    left: "34%",
    width: "24vw",
  },
  sideButtonDiv: {
    position: "absolute",
    top: "16%",
    left: "3%",
    width: "20vw",
    height: "12vh",
  },
  sideButton: {
    backgroundColor: "transparent",
    borderRadius: "15px",
    borderColor: "black",
    color: "black",
    width: "7vw",
  },
  sideLine: {
    position: "relative",
    top: "15%",
    border: "outset",
    height: "8vh",
    borderColor: "skyblue",
  },
  crossButton: {
    position: "relative",
    left: "75%",
    width: "5vw",
    border: "solid",
    borderRadius: "18px",
    color: "black",
  },
  homeButton: {
    position: "absolute",
    top: "20%",
    left: "10%",
    color: "black",
    backgroundColor: "lightblue",
    width: "10vw",
  },
  InputSymbol: {
    fontSize: 24,
    backgroundColor: "black",
  },
  ForgetPassword: {
    fontSize: "95%",
    position: "relative",
    left: "25%",
    paddingLeft: "15%",
    color: "black",
    // justifyContent: "center",
  },
  Line2: {
    position: "relative",
    backgroundColor: "black",
    left: "20%",
    width: "60%",
    padding: 2,
  },
  CreateOne: {
    position: "relative",
    color: "black",
    // top: "122%",
    left: "25%",
    fontSize: 16,
  },
  AlreadyRegister: {
    position: "relative",
    color: "black",
    left: "36%",
    fontSize: 16,
  },
  Anchor: {
    fontSize: 19,
    color: "#91a6f0",
  },
  themeButton: {
    position: "absolute",
    fontSize: 50,
    left: "85%",
    top: "8%",
  },
  prBox: {
    border: "solid",
    color: "black",
    backgroundColor: "lightblue",
    borderRadius: "30px",
  },
  confirmBox: {
    position: "absolute",
    top: "50%",
    left: "35%",
    border: "solid",
    borderRadius: "20px",
    borderColor: "blue",
    color: "black",
    width: "30vw",
    backgroundColor: "#91a6ff",
  },
};

module.exports = styles;
