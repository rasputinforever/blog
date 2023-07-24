const Post = require('../models/Post.js')
const dotenv = require('dotenv').config();

module.exports = (app) => {
    app.get('/api/get-posts', async (req, res) => {
      
      try {    
        Post.findOne({ _id: process.env.DBID || false })
        .then((data) => {
          res.status(200).json(data)
        })

      } catch (err) {
          console.log(err)    
          res.status(500).json(false)
      }
  
    })
    
    app.put('/api/submit-post/', async (req, res) => {
      const paramObj = req.body.params.q
      console.log(paramObj)
      const newPost = paramObj
      try {    
  
      Post.findOne({ _id: process.env.DBID || false })
      .then((data) => {
        // now inject new book data
        const newPosts = [...data.posts, newPost]

        Post.updateOne({ _id: process.env.DBID || false }, {
          posts: newPosts
        })
        .then((data) => {
          // final
          res.status(200).json(data)
        });
      })

        
      } catch (err) {
          console.log(err)    
          res.status(500).json(false)
      }
  
  
    })
  
  }
