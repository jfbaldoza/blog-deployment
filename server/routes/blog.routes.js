const BlogController = require('../controllers/blog.controller');  

module.exports = (app) => {
    app.post('/api/blog/new', BlogController.registerBlog);
    app.get('/api/blog', BlogController.getAllBlog); 
    app.get('/api/blog/:id', BlogController.getBlog);
    app.put('/api/update/blog/:id', BlogController.updateBlog);
    app.delete('/api/delete/blog/:id', BlogController.deleteBlog);
}

