import React from "react";
const messages = (props) => {
  let messages = props.messages;
  return (
    <div
      class="alert alert-warning d-flex justify-content-between w-50 container"
      role="alert"
    >
      <p className="h4">{messages.map((c) => c)}</p>
      <button
        type="button"
        className="btn btn-secondary"
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
