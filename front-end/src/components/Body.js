import React, { useEffect } from 'react';

// components
import NewPostForm from './NewPostForm';
import Posts from './Posts.js';

// utils
import postAPI from './api/post-api';

function Body() {
  
  const [posts, setPosts] = React.useState([]);
  
  const getData = async () => {

    try {
      const result = await postAPI.getPosts({})
      setPosts(result?.data)

    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
        <NewPostForm getData={getData} />
        <Posts posts={posts} getData={getData} />
    </div>
  );
}

export default Body;
