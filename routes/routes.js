const Post = require('../models/Post.js')

module.exports = (app) => {
    app.get('/api/get-posts', async (req, res) => {
        const paramObj = req.body.params.q.key
        console.log('you made it to the GET POST API!', paramObj)
      try {    
        Post.findOne({ _id: req.params.userid })
        .then((data) => {
          res.status(200).json(data)
        })

      } catch (err) {
          console.log(err)    
          res.status(500).json(false)
      }
  
    })
  
    app.put('/api/submit-post', async (req, res) => {
      const paramObj = req.body.params.q.key
      console.log(paramObj)
      try {    
  
        res.status(200).json(true)

        
      } catch (err) {
          console.log(err)    
          res.status(500).json(false)
      }
  
  
    })
    
  
  }
