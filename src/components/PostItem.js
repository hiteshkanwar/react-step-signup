import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {
 return (
      <li>
        { props.post.title} 
        <Link to={`/edit/${props.post.id}`} > Edit </Link>
        <Link to={`/show/${props.post.id}`} post={props.post}> Show </Link>
      </li>
  ); 
}

export default PostItem;