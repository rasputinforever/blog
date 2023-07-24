const Post = require('../models/Post.js')
const dotenv = require('dotenv').config();

module.exports = (app) => {
    app.get('/api/get-posts', async (req, res) => {

      try {    
        // needs to be "send most recent 10"
        // then another thing "get 10 more..."
        Post.findOne({ _id: process.env.DBID || false })
        .then((data) => {
          console.log("getting posts", data)
          res.status(200).json(data)
        })

      } catch (err) {
          console.log(err)    
          res.status(500).json(false)
      }
  
    })
    
    app.put('/api/submit-post/', async (req, res) => {
      const paramObj = req.body.params.q
      console.log("posting a post", paramObj)
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
