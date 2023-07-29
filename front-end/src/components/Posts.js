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

  const getFormattedDate = (value) => {
    let date = new Date(value);
    let year = date.getFullYear();
  
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + ' / ' + day + ' / ' + year;
  }
  
  return (
    <div className='post-container'>
        Posts
        <ul>
        {posts?.map((p, i) => {
          return (
            <li key={'post-' + i}>
              <div style={{outline: '1px black solid', margin: '5px', textAlign: 'left'}}>
                <h5 style={{width: '100%'}}>{p.title}</h5>
                <p style={{width: '100%'}}>{getFormattedDate(p.time)}</p>
                <p style={{width: '100%'}}>{p.body}</p>
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
