import React from 'react';
import userHoc from '../hoc/userHoc';
const User = props => <div>User 1</div>;

export default userHoc(User, 'Hello');
