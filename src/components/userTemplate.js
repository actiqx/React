import React from 'react';
import { PropTypes } from 'prop-types';
const UserTemplate = props => {
  return <div>User Template </div>;
};

UserTemplate.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf(['priya', 'john'])
  ]),
  lastname: PropTypes.string,
  age: PropTypes.number,
  //hobbies: PropTypes.array,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  spanish: PropTypes.bool,
  message: PropTypes.func,
  car: PropTypes.object,
  // mother: PropTypes.string.isRequired
  mother: function(props, propName, compoentName) {
    if (props[propName] !== 'Jane') {
      return new Error(
        `The Name ${props[propName]} is incorrect. Should be Jane`
      );
    }
  }
};

export default UserTemplate;
