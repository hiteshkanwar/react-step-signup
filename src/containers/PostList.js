import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts'
import PostItem from '../components/PostItem';
import _ from 'lodash';
class PostList extends React.Component{

  componentDidMount(){ 
    this.props.fetchPosts();
  }

  render(){     
    return _.map(this.props.posts, post => {
      if (post.title){
        return <PostItem key= {post.id} post= {post}/>
       }
    })
   }
 }

const mapStateToProps = (state) => {
  return{
   'posts': state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts } )(PostList)

