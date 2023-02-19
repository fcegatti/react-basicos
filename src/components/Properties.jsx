import React from "react";
import propTypes from "prop-types";


export default function Properties (props) {
  return(
    <div>
      <h2>{props.byDefault}</h2>
      <ul>
        <li>{props.string}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "Verdadero":"falso"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{props.object.name+" - "+props.object.email}</li>
        <li>{props.array.map(props.function).join(", ")}</li>
        <li>{props.reactElement}</li>
        <li>{props.component}</li>

      </ul>
    </div>
  )
}

Properties.defaultProps = {
  byDefault: "Las Props",
};

Properties.propTypes = {
  number: propTypes.number,
};