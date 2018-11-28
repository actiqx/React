import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../hoc/card';
import Auth from '../hoc/auth';
const Profile = props => {
  console.log(props);

  const redr = () => {
    return props.history.push('/');
  };
  return (
    <div>
      <Auth>
        <Card>
          <Link
            to={{
              pathname: `${props.match.url}/posts`
            }}
          >
            Take me to /profile/posts
          </Link>

          <div>Profile</div>
        </Card>
      </Auth>
    </div>
  );
};
export default Profile;
