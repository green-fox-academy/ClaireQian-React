import React from 'react';


function Button(props) {
  return (
    <button type="button" onClick={props.func}>{props.str}</button>
  );
}

export default Button;
