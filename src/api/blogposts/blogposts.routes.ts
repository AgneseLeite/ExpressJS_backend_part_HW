import { Router } from 'express';
import { getBlogPosts } from './posts.controller';
import { getPostById } from './posts.controller';
import { addPost } from './posts.controller';
import { updatePostById } from './posts.controller';
import { deletePostById } from './posts.controller';

const router = Router();

router.route('/').get(getBlogPosts);

router.route('/:id').get(getPostById);

router.route('/').post(addPost);

router.route('/:id').patch(updatePostById);

router.route('/:id').delete(deletePostById);

export default router;