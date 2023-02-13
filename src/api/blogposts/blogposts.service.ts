import { execute } from "./../utils/mysql.connector";
import { IBlogPost } from "./blogposts.model";
import { BlogQueries } from "./blogposts.queries";


// get all blog posts
export const getBlogPosts = async () => {
  return execute<IBlogPost[]>(BlogQueries.GetBlogPosts, [])
};

// get single post by id
export const getPostById= async (id: IBlogPost['id']) => {
  return execute<IBlogPost>(BlogQueries.GetPostById, [id]);
};

  // add a new blog post
export const addPost = async (post: IBlogPost) => {
  const result = await execute<{ affectedRows: number }>(BlogQueries.AddPost, [
    post.image,
    post.title,
    post.excerpt,
    post.description
  ]);
  return result.affectedRows > 0;
};


 // Update blog post by id
export const updatePostById = async (post: IBlogPost) => {
  const result = await execute<{ affectedRows: number }>(BlogQueries.UpdatePostById, [
    post.image,
    post.title,
    post.excerpt,
    post.description
  ]);
  return result.affectedRows > 0;
};


// Delete blog post by id
 export const deletePostById = async (id: IBlogPost['id']) => {
  const result = await execute<{ affectedRows: number }>(BlogQueries.DeletePostById, [
    id
  ]);
  return result.affectedRows > 0;
};