import React from "react";
function TextInput(props) {
  return (
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">
        {props.label}
      </label>
      <input
        type={props.name}
        className="form-control"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
export default TextInput;
