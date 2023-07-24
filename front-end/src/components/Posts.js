import React from 'react';

// utils
import postAPI from './api/post-api';

const NewPostForm = ({ posts, getData }) => {

  const deletePost = async (id) => {
    
    const query = {
      id: id,
    }

    try {
      const response = await postAPI.deletePost(query)
      console.log("success?", response.status)
      // this is where you'd handle errors
      getData()

    } catch (err) {
      console.log(err);

    }
}
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
                <button onClick={() => deletePost(p._id)}>delete post</button>
                <button>edit post</button>
              </div>
            </li>
          )
        })}
        </ul>
    </div>
  );
}

export default NewPostForm;
