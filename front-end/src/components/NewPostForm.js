import React from 'react';

// utils
import postAPI from './api/post-api';

function NewPostForm() {

    const [title, setTitle] = React.useState('')
    const [body, setBody] = React.useState('')

  const submitData = async () => {
    const query = {
      title: title,
      body: body,
      time: new Date()
    }

    try {
      const result = await postAPI.submitPost(query)
      console.log(result)

    } catch (err) {
      console.log(err);

    }
  }

  return (
    <div className='post-container'>
        <p>Post. This will only show up for me, the admin!</p>
        <textarea id="post-title" name="post title" value={title} onChange={(e) => setTitle(e.target.value)} className='post-title'>
            Post Title
        </textarea>
        <textarea id="post-body" name="post body" value={body} onChange={(e) => setBody(e.target.value)} className='post-body'>
            Post Body
        </textarea>
        <button disabled={title === '' || body === ''} onClick={submitData} >submit</button>
    </div>
  );
}

export default NewPostForm;
