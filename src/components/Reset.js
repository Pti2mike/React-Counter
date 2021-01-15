import React from "react";

function Reset(props) {
  //   console.log(props.reset);

  return (
    <div
      className="reset"
      onClick={() => {
        props.reset(props.value - props.value);
      }}
    >
      Reset
    </div>
  );
}

export default Reset;
