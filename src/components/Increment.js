import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Increment(props) {
  // console.log(props.increment); // function
  return (
    <div>
      {props.value === 10 ? null : (
        <FontAwesomeIcon
          icon="plus"
          className="operator"
          onClick={() => {
            props.add(props.value + 1);
          }}
        />
      )}
    </div>
  );
}

export default Increment;
