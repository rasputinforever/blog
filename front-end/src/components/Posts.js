import React, { useEffect } from 'react';

// utils
import postAPI from './api/post-api';

function NewPostForm() {
  
  const [posts, setPosts] = React.useState([]);
  
  const getData = async () => {

    try {
      const result = await postAPI.getPosts({})
      setPosts(result.data?.posts)

    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(posts)
  return (
    <div className='post-container'>
        Posts
        <ul>
        {posts?.map((p, i) => {
          return (
            <li key={'post-' + i}>
              <div style={{outline: '1px black solid', margin: '5px', textAlign: 'left'}}>
                <p style={{width: '100%'}}>Title: {p.title}</p>
                <p style={{width: '100%'}}>Time: {p.time}</p>
                <p style={{width: '100%'}}>Body: {p.body}</p>
              </div>
            </li>
          )
        })}
        </ul>
    </div>
  );
}

export default NewPostForm;
