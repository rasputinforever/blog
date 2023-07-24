const Post = require('../models/Post.js')
const dotenv = require('dotenv').config();

module.exports = (app) => {
    app.get('/api/get-posts', async (req, res) => {

      try {    
        // needs to be "send most recent 10"
        // then another thing "get 10 more..."
        Post.findOne({ _id: process.env.DBID || false })
        .then((data) => {
          const returnData = data.posts.slice(0, 10).sort((a,b) =>  new Date(b.time) - new Date(a.time));
          res.status(200).json(returnData)
        })

      } catch (err) {
          console.log(err)    
          res.status(500).json(false)
      }
  
    })
    
    app.put('/api/submit-post/', async (req, res) => {
      const paramAction = req.body.params.a
      const paramObj = req.body.params.q
      console.log(paramAction, " to a post", paramObj)
      let response = false
      try {    

        const postData = await Post.findOne({ _id: process.env.DBID || false })
        
        // adding a post
        if (paramAction === 'new post') {

          const newPosts = [...postData.posts, paramObj]
          response = await Post.updateOne({ _id: process.env.DBID || false }, {
            posts: newPosts
          })
        }

        if (paramAction === 'delete post') {

          const newPosts = postData.posts.filter(p => p._id.toString() !== paramObj.id)
          response = await Post.updateOne({ _id: process.env.DBID || false }, {
            posts: newPosts
          })
        }

        res.status(200).json(response.acknowledged)
        
      } catch (err) {
          console.log(err)    
          res.status(500).json(false)
      }
  
  
    })
  
  }
