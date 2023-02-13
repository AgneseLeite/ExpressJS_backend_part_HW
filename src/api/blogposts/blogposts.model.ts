import { Request } from 'express';

export interface IBlogPost {
    id: number;
    image: string;
    title: string,
    excerpt: string,
    description: string
  };

export interface IGetPostByIdReq extends Request<{ id: IBlogPost['id'] }> {}
export interface IAddBlogPostReq extends Request{}
export interface IUpdateBlogPostReq extends Request<{ id: IBlogPost['id'] }, any, IBlogPost> {}
export interface IDeleteBlogPostReq extends Request<{ id: IBlogPost['id'] }> {}