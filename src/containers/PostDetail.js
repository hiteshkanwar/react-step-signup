import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPost } from '../actions/posts'

class PostDetail extends React.Component{
  
  componentDidMount(){ 
     if (Object.keys(this.props.posts).length == 0)
     {
      this.props.fetchPost(this.props.match.params.id)
     }
  }

  render(){ 
  	const { post } = this.props
    if(!post){
      return <div>Loading</div>
    }
    return (
    	<div>
         <li> Title: {post.title}</li>
         <li> Content: {post.content}</li>
       </div>
      )    
   }
 }

const mapStateToProps = ({posts}, props) => {
  return{
   'posts': posts,
   'post': _.mapKeys(posts,'id')[props.match.params.id]
  };
}

export default connect(mapStateToProps, { fetchPost })(PostDetail)

