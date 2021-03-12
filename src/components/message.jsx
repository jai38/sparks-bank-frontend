import React from "react";
const messages = (props) => {
  let messages = props.messages;
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      {messages.map((c) => c)}
      <button
        type="button"
        className="close"
        onClick={() => {
          // props.changeStatus("login");
          props.deleteMessage();
        }}
      >
        <span>&times;</span>
      </button>
    </div>
  );
};

export default messages;
