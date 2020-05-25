import React from 'react';

export default props => {
  return (
    <button onClick={props.setFunc}>{props.children}</button>
  );
}