import React from 'react';

export const Card = props => {
  const style = {
    background: 'lightgrey'
  };
  return <div style={style}>{props.children}</div>;
};

export default Card;
