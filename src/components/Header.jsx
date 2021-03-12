import React from "react";

const NavBar = (props) => {
  let styles;
  if (props.getTheme == "dark") {
    styles = {
      styleHeading: {
        color: "red",
      },
      stylePara: {
        color: "#ff8080",
      },
      styleLine: {
        position: "relative",
        backgroundColor: "white",
        left: "30%",
        width: "40vw",
        padding: 1,
      },
    };
  } else {
    styles = {
      styleHeading: {
        color: "#000080",
      },
      stylePara: {
        color: "#0000ff",
      },
      styleLine: {
        position: "relative",
        backgroundColor: "black",
        left: "30%",
        width: "40vw",
        padding: 1,
      },
    };
  }
  return (
    <div>
      <h1
        className="d-flex justify-content-center p-4"
        style={styles.styleHeading}
      >
        Sparks Bank
      </h1>
      <hr style={styles.styleLine} />
      <p className="d-flex justify-content-center p-4" style={styles.stylePara}>
        Banking System is now with you 24*7.
      </p>
    </div>
  );
};

export default NavBar;
