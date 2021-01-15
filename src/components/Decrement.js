import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Decrement(props) {
  //   console.log(props.substract);
  return (
    <div>
      {props.value !== 0 ? (
        <FontAwesomeIcon
          icon="minus"
          className="operator"
          onClick={() => {
            props.substract(props.value - 1);
          }}
        />
      ) : null}
    </div>
  );
}

export default Decrement;
