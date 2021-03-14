const changeTheme = () => {
  console.log("theme changed");
};
let styles = {
  root: {
    backgroundColor: "black",
    height: "100vh",
  },
  BoxLogin: {
    position: "relative",
    width: "40%",
    left: "30%",
    paddingBottom: "2%",
    backgroundImage:
      "linear-gradient(to right, #000000, #262626 54%, #000000 )",
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
      "linear-gradient(to right, #000000 0%, #262626 54%, #000000 )",
  },
  BoxDashboard: {
    backgroundImage:
      "linear-gradient(to right, #000000 0%, #262626 54%, #000000 )",
  },
  profileDiv: {
    position: "absolute",
    top: "30%",
    left: "2%",
    width: "25vw",
    color: "white",
    border: "solid",
    // backgroundColor: "#262626",
    borderColor: "#cc0000",
    borderRadius: "30px",
  },
  Heading: {
    justifyContent: "center",
    color: "white",
  },
  Line: {
    backgroundColor: "white",
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
    color: "white",
    paddingLeft: 20,
    backgroundColor: "#404040",
    width: "18vw",
    fontSize: "120%",
  },
  Button: {
    position: "relative",
    left: "25%",
    width: "19vw",
    backgroundColor: "#ff4444",
    borderColor: "#ff4444",
  },
  SignupButton: {
    position: "relative",
    left: "28%",
    width: "20vw",
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
    color: "white",
    width: "7vw",
  },
  sideLine: {
    position: "relative",
    top: "15%",
    border: "outset",
    height: "8vh",
    color: "white",
  },
  crossButton: {
    position: "relative",
    left: "75%",
    width: "5vw",
    border: "solid",
    borderRadius: "18px",
    color: "white",
  },
  homeButton: {
    position: "absolute",
    top: "20%",
    left: "10%",
    color: "white",
    backgroundColor: "#d9534f",
    width: "10vw",
  },
  InputSymbol: {
    fontSize: 24,
  },
  ForgetPassword: {
    fontSize: "95%",
    position: "relative",
    left: "25%",
    paddingLeft: "15%",
    // justifyContent: "center",
  },
  Line2: {
    position: "relative",
    backgroundColor: "white",
    left: "20%",
    width: "60%",
    padding: 2,
  },
  CreateOne: {
    position: "relative",
    color: "white",
    // top: "122%",
    left: "25%",
    fontSize: 16,
  },
  AlreadyRegister: {
    position: "relative",
    color: "white",
    left: "36%",
    fontSize: 16,
  },
  Anchor: {
    color: "#ff4444",
    fontSize: 19,
  },
  themeButton: {
    position: "absolute",
    fontSize: 50,
    left: "85%",
    top: "8%",
  },
  prBox: {
    border: "solid",
    color: "white",
    backgroundColor: "#262626",
    borderRadius: "30px",
  },
  confirmBox: {
    position: "absolute",
    top: "50%",
    left: "35%",
    border: "solid",
    color: "white",
    width: "30vw",
    backgroundColor: "#262626",
  },
};

module.exports = styles;
