import React from 'react';

export const UserHoc = (WrappedComponent, arg1) => {
  return props => (
    <div>
      {arg1} <WrappedComponent {...props} />
    </div>
  );
};

export default UserHoc;
