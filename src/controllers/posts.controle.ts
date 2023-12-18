import { Request, Response } from "express";
import createPostsService from "../services/posts/createPosts.service";
import deletePostsService from "../services/posts/deleteContatc.service";
import allPostsService from "../services/posts/readPosts.service";
import allPostsUserService from "../services/posts/readUserPosts.service";

const createPostsController = async (
    req: Request,
    resp: Response
  ): Promise<Response> => {
    const PostsData = req.body;
    const userId = parseInt(resp.locals.user.id)
  
    const newUser = await createPostsService(PostsData, userId);
  
    return resp.status(201).json(newUser);
  };

  const allPostsController = async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const Post = await allPostsService();
  
    return response.json(Post);
  };

  const allPostsUserController = async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const userId = parseInt(response.locals.user.id)
    const Post = await allPostsUserService(userId);
  
    return response.json(Post);
  };

  const postsDeleteController = async (
    req: Request,
    resp: Response
  ): Promise<Response> => {
    const postId = parseInt(req.params.id)
    const userId = parseInt(resp.locals.user.id)
  
    const post = await deletePostsService(postId, userId);
    return resp.json(post);
  }

  export {createPostsController,postsDeleteController,allPostsController,allPostsUserController}