import React from 'react';

export const Conditional = props => {
  const value = true;

  const returnValue = () => {
    return true;
  };

  const showIt = () => {
    return returnValue() ? (
      <div>Hello, it is true</div>
    ) : (
      <div>Hello, it is False</div>
    );
  };
  return (
    <div>
      {/* {returnValue() ? (
        <div>Hello, it is true</div>
      ) : (
        <div>Hello, it is False</div>
      )} */

      showIt()}
    </div>
  );
};

export default Conditional;
