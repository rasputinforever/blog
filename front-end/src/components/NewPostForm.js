import React from 'react';

function NewPostForm() {

    const [title, setTitle] = React.useState('')
    const [body, setBody] = React.useState('')

  return (
    <div className='post-container'>
        <p>Post. This will only show up for me, the admin!</p>
        <textarea id="post-title" name="post title" value={title} onChange={(e) => setTitle(e.target.value)} className='post-title'>
            Post Title
        </textarea>
        <textarea id="post-body" name="post body" value={body} onChange={(e) => setBody(e.target.value)} className='post-body'>
            Post Body
        </textarea>
    </div>
  );
}

export default NewPostForm;
