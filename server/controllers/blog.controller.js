const Blog = require('../models/blog.model');

module.exports.registerBlog = (req, res) => {
    Blog.create(req.body) 
        .then(blog => res.json(blog))
        .catch(err => res.status(400).json({message: 'Something went wrong creating', error: err}))
}

module.exports.getAllBlog  = (req, res) => {
    Blog.find({})
        .then(blog => {
            console.log(blog); 
            res.json(blog);
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({message: 'Something went wrong', error: err})
        })
}

module.exports.getBlog = (req, res) => {
    Blog.findOne({_id:req.params.id})
        .then(blog => res.json(blog))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}));
}

module.exports.updateBlog = (req, res) => {
    Blog.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedBlog => res.json(updatedBlog))
        .catch(err => res.status(400).json({message: 'Something went wrong updating pirate', error: err}))
}

module.exports.deleteBlog = (req, res) => {
    Blog.deleteOne({ _id: req.params.id }) 
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json({message: 'Something went wrong deleting', error: err}))
}