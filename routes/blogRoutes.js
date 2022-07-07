const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogControllers')

router.get('/', blogController.blog_index); //getting the index

router.post('/', blogController.blog_create_post); //posting a new blog

router.get('/create', blogController.blog_create_get); //creating a new blog

router.get('/:id', blogController.blog_details); //getting blog details

router.delete('/:id', blogController.blog_delete); //deleting a blog

module.exports = router;