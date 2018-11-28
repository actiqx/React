import React from 'react';
import { Link } from 'react-router-dom';
const Posts = () => {
  const ids = [
    { id: '1', name: 'Post 1' },
    { id: '2', name: 'Post 2' },
    { id: '3', name: 'Post 3' }
  ];

  //   const list = ids.map(item => {
  //     return (
  //       <span key={item.id}>
  //         <Link to={item.id}>{item.name}</Link> <br />
  //       </span>
  //     );
  //   });

  //   return (
  //     <div>
  //       {/* <Link to="/posts/1/priya"> Post1</Link>
  //       <br />
  //       <Link to="/posts/2/priya">Post2</Link>
  //       <br />
  //       <Link to="/posts/3/priya">Post3</Link>
  //       <br /> */}

  //       {list}
  //     </div>
  //   );

  return ids.map(item => {
    return (
      <span key={item.id}>
        <Link to={item.id}>{item.name}</Link> <br />
      </span>
    );
  });
};
export default Posts;
