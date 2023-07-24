import React, { useEffect } from 'react';

// utils
import postAPI from './api/post-api';

function NewPostForm() {
  
  const [posts, setPosts] = React.useState(false);
  
  const getData = async () => {

    try {
      const result = await postAPI.getPosts({})
      console.log(result)
      setPosts(result)

    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='post-container'>
        Post Body Below...

    </div>
  );
}

export default NewPostForm;
