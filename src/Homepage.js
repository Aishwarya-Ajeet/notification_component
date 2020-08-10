import React from "react";
import { store } from "react-notifications-component";
//import "react-notifications-component/dist/theme.css";
import "animate.css";
import "./App.css";

export default function Homepage() {
  return (
    <>
      <h1>My Website</h1>
      <br />
      <h4> Click the button below to get notifications </h4>
      <br /> <br />
      <button
        onClick={() => {
          store.addNotification({
            content: MyNotification,
            title: "Wonderful!",
            container: "top-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
            },
            dismissable: { click: true },
          });
        }}
      >
        Add success notification
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          store.addNotification({
            content: MyError,
            title: "Error!",
            container: "top-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
            },
            dismissable: { click: true },
          });
        }}
      >
        Add error notification
      </button>
    </>
  );
}

function MyNotification() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#e8f7e1",
        borderRadius: 5,
        width: "130%",
        border: "5px",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        fontFamily: "RakutenSans",
        fontSize: "18px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        letterSpacing: "normal",
        color: "#009600",
      }}
    >
      <p>
        &#x2714; &nbsp; Batch uploaded successfully. You will be notified when
        the batch is ready for analysis
      </p>
      <br />
      <br />
      <div className="topright">&#x2716; </div>
    </div>
  );
}

function MyError() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#ffecec",
        borderRadius: 5,
        width: "130%",
        border: "5px",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        fontFamily: "RakutenSans",
        fontSize: "18px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        letterSpacing: "normal",
        color: "#f37171",
      }}
    >
      <p>
        &#x2716; &nbsp; Error occured. Batch could not be uploaded. Please try
        again!
      </p>
      <br />
      <br />
      <div className="topright">&#x2716; </div>
    </div>
  );
}
